<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SecretaryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Auth\LoginController;use App\Http\Controllers\FolderController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Auth::routes();

Route::get('/login', [LoginController::class, 'login'])->name('login.submit');

Route::get('/secretary', [SecretaryController::class, 'index'])->name('lr-secretaries-home');

Route::get('/delete-folder/{folderid}', [FolderController::class, 'deleteFolder'])->name('delete.folder');

Route::get('/download-folder/{foldername}', [FolderController::class, 'downloadFolder'])->name('download.folder');

Route::get('/secretary/view-folder/{foldername}/{folderid}', [SecretaryController::class, 'viewFolder'])->name('view.folder');

Route::get('/{user}/{foldername}/{newfolder}/{memberid}/{subfolderid}', [FolderController::class, 'newFolder'])->name('new.folder');

Route::post('/create-folder', [FolderController::class, 'createFolder'])->name('create.folder');

Route::post('/splitcomm/create', [SecretaryController::class, 'createSplitcomm'])->name('create.splitcomm');

Route::get('/upload', [FolderController::class, 'showUploadForm'])->name('showUploadForm');

Route::post('/upload', [FolderController::class, 'uploadFiles'])->name('upload');

Route::get('/view-subfolder/{foldername}/{subfoldername}', [SecretaryController::class, 'subFolder'])->name('view.subfolder');

Route::post('/upload-signature', [SecretaryController::class, 'uploadSignature'])->name('create.signature');

Route::get('/delete-signature/{signatureid}/{filename}', [SecretaryController::class, 'deleteSignature'])->name('delete.signature');

Route::post('/reupload-splitcomm', [FolderController::class, 'reuploadSplitComm'])->name('reupload.splitcomm');
