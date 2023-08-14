<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Folders;
use App\Models\Subfolder;
use App\Models\Signatures;
use App\Models\SalesTeamLeaders;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class SecretaryController extends Controller
{
    public function __construct()
    {
        date_default_timezone_set("Asia/Manila");
    }

    public function index(Request $request)
    {
        $user = 'Johnry Aneda Fibra';
        $memberid = '1';
        $sales_team = 'BEX Team Gensan';

        // Sanitize the $user string to make it a valid folder name
        $userFolderName = preg_replace("/[^a-zA-Z0-9]/", " ", $user); // Replace spaces with underscores

        // The path where the folder will be created
        $folderPath = public_path('secretaries/' . $userFolderName);

        // Check if the folder already exists
        if (!file_exists($folderPath)) {
            // Create the folder if it doesn't exist
            mkdir($folderPath, 0755, true);
        }

        $folders_list = Folders::where('secretaryid', '=', $memberid)->where('status', '=', '0')->get();

        return view('front.lr-secretaries-home', compact('user', 'memberid', 'folders_list', 'sales_team'));
    }

    public function viewFolder(Request $request)
    {
        $user = 'Johnry Aneda Fibra';
        $memberid = '1';
        $sales_team = 'BEX Team Gensan';
        $foldername = $request->foldername;
        $folderid = $request->folderid;

        $folders_list = Subfolder::where('folderid', '=', $folderid)->where('secretaryid', '=', $memberid)->where('status', '=', '0')->get();
        $sales_team_leader = SalesTeamLeaders::select('team_leader')->where('teamname', '=', $sales_team)->get();

        return view('front.lr-secretaries-view-folder', compact('user', 'memberid', 'foldername', 'folderid', 'folders_list', 'sales_team', 'sales_team_leader'));
    }

    public function createSplitcomm(Request $request)
    {
        try {
            // Validate the incoming request
            $request->validate([
                'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust max size as needed
            ]);

            // Get the uploaded image file
            $image = $request->file('image');

            // Generate a unique file name
            $fileName = $request->splitcommfile . '.png';

            // Construct the destination directory within the public directory
            $destinationPath = public_path($request->newfolderlocation);

            // Move the uploaded file to the desired storage location
            $image->move($destinationPath, $fileName);

            return response()->json(['message' => 'Image saved successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to save image'], 500);
        }
    }

    public function subFolder(Request $request)
    {
        $user = 'Johnry Aneda Fibra';
        $memberid = '1';
        $sales_team = 'BEX Team Gensan';
        $foldername = $request->foldername;
        $subfoldername = $request->subfoldername;

        // Specify the path to the specific public folder
        $publicFolderPath = public_path('secretaries/' . $user . '/' . $foldername . '/' . $subfoldername);

        // Get a list of all files in the specified folder
        $files = collect(File::allFiles($publicFolderPath))->map(function ($file) {
            return [
                'name' => $file->getBasename(),
                'extension' => $file->getExtension(),
            ];
        });

        return view('front.lr-secretaries-view-subfolder', compact('user', 'memberid', 'foldername', 'subfoldername', 'files', 'publicFolderPath', 'sales_team'));
    }

    public function uploadSignature(Request $request)
    {
        $userName = $request->input('user');
        $memberId = $request->input('memberid');
        $imageData = $request->input('signatureImage');

        // Extract the base64-encoded image data and save it as a PNG file
        $imageData = str_replace('data:image/png;base64,', '', $imageData);
        $imageData = str_replace(' ', '+', $imageData);
        $imageBinary = base64_decode($imageData);

        $fileName = $userName . '_' . time() . '.png';
        $filePath = public_path('signatures/' . $fileName);

        File::put($filePath, $imageBinary);

        $signatures = new Signatures();
        $signatures_data = $request->only($signatures->getFillable());
        $signatures_data['secretaryid'] = $memberId;
        $signatures_data['filename'] = $fileName;
        $signatures->fill($signatures_data)->save();

        return redirect()->back()->with('success', 'Signature saved successfully.');
    }

    public function deleteSignature(Request $request)
    {
        $signatureid = $request->input('signatureid');
        $filename = $request->input('filename');

        // Delete the signature from the database
        $deletesignature = Signatures::where('id', '=', $signatureid)->delete();

        if ($deletesignature) {
            $filePath = public_path('signatures/' . $filename);

            // Check if the file exists before attempting to delete
            if (File::exists($filePath)) {
                // Delete the file using the File facade
                File::delete($filePath);
            }

            return redirect()->back()->with('success', 'Signature and file deleted successfully.');
        } else {
            return redirect()->back()->with('error', 'Failed to delete signature.');
        }
    }
}
