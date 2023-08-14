<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use App\Models\Folders;
use App\Models\Subfolder;
use ZipArchive;

class FolderController extends Controller
{
    public function createFolder(Request $request)
    {
        $request->validate([
            'foldername' => 'required|string|max:255',
        ]);

        $user = 'Johnry Aneda Fibra';
        $memberid = '1';

        $folderName = $request->input('foldername');

        // Create the folder in public/secretaries/{foldername}
        $folderPath = public_path('secretaries/' . $user . '/' . $folderName);
        if (!File::exists($folderPath)) {
            File::makeDirectory($folderPath, 0755, true);
        }

        $folders = new Folders();
        $folders_data = $request->only($folders->getFillable());
        $folders_data['secretaryid'] = $request->memberid;
        $folders_data['foldername'] = $request->foldername;
        $folders_data['status'] = 0;
        $folders->fill($folders_data)->save();

        // You can optionally redirect to another page after successful folder creation
        return redirect()->back()->with('success', 'Folder created successfully!');
    }

    public function deleteFolder($folderid)
    {
        // No need to validate here as the $folderid is part of the URL and should always be present

        $folders = Folders::where('id', $folderid)->update(['status' => 1]);

        // You can optionally redirect to another page after successful folder creation
        return redirect()->back()->with('success', 'Folder hidden successfully!');
    }

    public function downloadFolder(Request $request)
    {
        $user = 'Johnry Aneda Fibra';

        $folderName = $request->foldername; // Replace 'your_folder_name' with the name of the folder you want to download.
        $zipFileName = $folderName . '.zip';
        $zipFilePath = public_path('secretaries/' . $user . '/' . $zipFileName);

        // Create a new ZipArchive instance
        $zip = new ZipArchive();

        if ($zip->open($zipFilePath, ZipArchive::CREATE | ZipArchive::OVERWRITE)) {
            // Add all files and subdirectories from the folder to the zip archive
            $this->addFolderToZip(public_path('secretaries/' . $user . '/' . $folderName), $zip);
            $zip->close();

            // Return the zip file for download
            return response()->download($zipFilePath)->deleteFileAfterSend(true);
        } else {
            // Return an error response if zip creation fails
            return response()->json(['message' => 'Failed to create zip file.'], 500);
        }
    }

    private function addFolderToZip($folderPath, $zip)
    {
        $files = File::allFiles($folderPath);

        foreach ($files as $file) {
            $filePath = $file->getRealPath();
            $relativePath = 'secretaries/' . substr($filePath, strlen(public_path('secretaries/')));

            $zip->addFile($filePath, $relativePath);
        }

        $subfolders = File::directories($folderPath);

        foreach ($subfolders as $subfolder) {
            $this->addFolderToZip($subfolder, $zip);
        }
    }

    public function newFolder(Request $request)
    {
        $newFolder = $request->newfolder;

        // Create the folder in public/secretaries/{foldername}
        $folderPath = public_path('secretaries/' . $request->user . '/' . $request->foldername . '/' . $newFolder);
        if (!File::exists($folderPath)) {
            File::makeDirectory($folderPath, 0755, true);
        }

        $subfolders = new Subfolder();
        $subfolders_data = $request->only($subfolders->getFillable());
        $subfolders_data['folderid'] = $request->subfolderid;
        $subfolders_data['secretaryid'] = $request->memberid;
        $subfolders_data['foldername'] = $newFolder;
        $subfolders_data['status'] = 0;
        $subfolders->fill($subfolders_data)->save();

        return redirect()->back()->with('success');
    }

    public function showUploadForm()
    {
        return view('upload');
    }

    public function uploadFiles(Request $request)
    {
        $uploadedFiles = [];

        if ($request->hasFile('splitcommfiles')) {
            foreach ($request->file('splitcommfiles') as $file) {
                // Process and store the file as needed
                $uploadedFileName = $file->getClientOriginalName();
                $publicPath = public_path($request->input('splitcomm-path')); // Default 'uploads' folder if splitcomm-path is not provided

                // Ensure the directory exists
                if (!is_dir($publicPath)) {
                    mkdir($publicPath, 0777, true);
                }

                $uploadedFilePath = $publicPath . '/' . $uploadedFileName;
                $file->move($publicPath, $uploadedFileName);

                $uploadedFiles[] = $uploadedFilePath;
            }
        }

        return response()->json(['message' => 'Files uploaded successfully', 'files' => $uploadedFiles]);
    }

    public function reuploadSplitComm(Request $request)
    {
        try {
            $user = $request->input('splitcomm-user');
            $memberid = $request->input('splitcomm-memberid');
            $filename = $request->input('splitcomm-filename');
            $datetime = $request->input('splitcomm-datetime');
            $splitcommpath = $request->input('splitcomm-path');

            $publicPath = public_path();
            $filePath = "{$publicPath}/{$splitcommpath}/{$filename}";

            if (File::exists($filePath)) {
                File::delete($filePath);
            } else {
                return response()->json(['message' => 'File not found'], 404);
            }

            // Validate the incoming request
            $request->validate([
                'reuploadfile' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust max size as needed
            ]);

            // Get the uploaded image file
            $image = $request->file('reuploadfile');

            // Remove .png from $filename if it exists
            if (substr($filename, -4) === '.png') {
                $filename = substr($filename, 0, -4);
            }

            // Generate a unique file name
            $newFile = 'Split Commission Request - '. $user . ' ' . $datetime . ' -Signed.png';

            // Construct the destination directory within the public directory
            $destinationPath = public_path($request->splitcommpath);

            // Move the uploaded file to the desired storage location
            $image->move($splitcommpath, $newFile);

            return response()->json(['message' => 'File deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to save image'], 500);
        }
    }
}
