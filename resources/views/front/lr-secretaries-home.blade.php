@extends('front.lr-front')

@section('title', 'File Management | Home')

@section('css-links')
<!-- CSS LINKS HERE -->
<!-- Custom Dashboard CSS-->
<link rel="stylesheet" href="{{ asset('plugins/select2/css/select2.min.css') }}">
<link rel="stylesheet" href="{{ asset('plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css') }}">
<link rel="stylesheet" href="{{ asset('plugins/daterangepicker/daterangepicker.css') }}">
<link rel="stylesheet" href="{{ asset('plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css') }}">
<link rel="stylesheet" href="{{ asset('css/rcrop.min.css') }}">
<link rel="stylesheet" href="{{ asset('plugins/toastr/toastr.min.css') }}">
<link rel="stylesheet" href="{{ asset('plugins/sweetalert2-theme-bootstrap-4/bootstrap-4.min.css') }}">
<link rel="stylesheet" href="{{ asset('plugins/bs-stepper/css/bs-stepper.min.css') }}">
<link rel="stylesheet" href="{{ asset('plugins/bootstrap-slider/css/bootstrap-slider.min.css') }}">
<link rel="stylesheet" href="{{ asset('plugins/datatables-bs4/css/dataTables.bootstrap4.min.css') }}">
<link rel="stylesheet" href="{{ asset('plugins/datatables-responsive/css/responsive.bootstrap4.min.css') }}">
<link rel="stylesheet" href="{{ asset('plugins/datatables-buttons/css/buttons.bootstrap4.min.css') }}">
<link rel="stylesheet" href="{{ asset('css/adminlte.min.css') }}">
<!-- CSS LINKS HERE -->
<style>
    .redline
    {
        border:2px solid #fe0000;
    }
</style>
@endsection


@section('javascript-links')
<!-- JS LINKS HERE -->
@endsection

@section('topnav')
<!-- Left navbar links -->
<ul class="navbar-nav">
    <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link" data-toggle="modal" data-target="#modal-md"><i class="fa fa-folder-closed"></i> New Folder</a>
    </li>
</ul>
@endsection

@section('content')
<div class="main">
    <div class="ml-3">
        <h4 class="mb-2 pt-3">Home</h4>
        <h5 class="mb-2 mt-4">Folders</h5>
        <div class="row">
            @foreach($folders_list as $folders)
            <div class="col-lg-3 col-4">
                <div class="card">
                    <div class="card-header">
                        <div class="card-tools">
                            <div class="btn-group">
                                <button type="button" class="btn btn-white btn-sm" data-toggle="dropdown" data-offset="-52" aria-expanded="false">
                                    <i class="fas fa-ellipsis"></i>
                                </button>
                                <div class="dropdown-menu" role="menu">
                                    <a href="{{ route('download.folder', ['foldername' => $folders->foldername]) }}" class="dropdown-item" style="color: black !important;"><i class="fa fa-download"></i> Download</a>
                                    <a href="{{ route('delete.folder', ['folderid' => $folders->id]) }}" class="dropdown-item" style="color: black !important;"><i class="fa fa-trash-can"></i> Delete</a>
                                </div>
                            </div>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body text-center">
                        <h1 class="fa fa-folder-closed" style="font-size:70px;"></h1>
                        <br>
                        <a href="{{ URL::to('/secretary/view-folder') }}/{{ $folders->foldername }}/{{ $folders->id }}">{{ $folders->foldername }}</a>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
            @endforeach
        </div>
    </div>
</div>
<div class="modal fade" id="modal-md">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">New Folder</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form method="post" action="{{ route('create.folder') }}">
                @csrf
                <div class="modal-body">
                    <div class="form-group">
                        <label for="foldername">Folder Name</label>
                        <input type="text" class="form-control" id="foldername" name="foldername">
                    </div>
                    <input type="hidden" name="user" value="{{ $user }}">
                    <input type="hidden" name="memberid" value="{{ $memberid }}">
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
            </form>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
@endsection
@section('javascript-explicit-methods')
<!-- THIRD PARTY JS / JS METHODS -->
<script src="{{ asset('plugins/sweetalert2/sweetalert2.min.js') }}"></script>
<script src="{{ asset('plugins/toastr/toastr.min.js') }}"></script>
<script src="{{ asset('plugins/moment/moment.min.js') }}"></script>
<script src="{{ asset('plugins/select2/js/select2.full.min.js') }}"></script>
<script src="{{ asset('plugins/moment/moment.min.js') }}"></script>
<script src="{{ asset('plugins/inputmask/jquery.inputmask.min.js') }}"></script>
<script src="{{ asset('plugins/daterangepicker/daterangepicker.js') }}"></script>
<script src="{{ asset('plugins/jquery-validation/jquery.validate.min.js') }}"></script>
<script src="{{ asset('plugins/jquery-validation/additional-methods.min.js') }}"></script>
<script src="{{ asset('plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js') }}"></script>
<script src="{{ asset('js/rcrop.min.js') }}"></script>
<script src="{{ asset('plugins/bs-custom-file-input/bs-custom-file-input.min.js') }}"></script>
<script src="{{ asset('plugins/bs-stepper/js/bs-stepper.min.js') }}"></script>
<script src="{{ asset('plugins/bootstrap-slider/bootstrap-slider.min.js') }}"></script>
<script src="{{ asset('plugins/datatables/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-bs4/js/dataTables.bootstrap4.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-responsive/js/dataTables.responsive.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-responsive/js/responsive.bootstrap4.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-buttons/js/dataTables.buttons.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-buttons/js/buttons.bootstrap4.min.js') }}"></script>
<script src="{{ asset('plugins/jszip/jszip.min.js') }}"></script>
<script src="{{ asset('plugins/pdfmake/pdfmake.js') }}"></script>
<script src="{{ asset('plugins/pdfmake/vfs_fonts.js') }}"></script>
<script src="{{ asset('plugins/datatables-buttons/js/buttons.html5.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-buttons/js/buttons.print.min.js') }}"></script>
<script src="{{ asset('plugins/datatables-buttons/js/buttons.colVis.min.js') }}"></script>
<script src="{{ asset('js/adminlte.min.js') }}"></script>
<script src="{{ asset('js/demo.js') }}"></script>
<script>
    //Date picker
    $('#reservationdate').datetimepicker({
        format: 'L'
    });
</script>
@endsection