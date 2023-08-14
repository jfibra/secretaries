@extends('front.lr-front')

@section('title', 'File Management | View Subfolder')

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
    .redline {
        border: 2px solid #fe0000;
    }

    #progress-container {
        display: block;
        width: 100%;
        height: 20px;
        border: 1px solid #ccc;
        margin-top: 10px;
    }

    #progress-bar {
        height: 100%;
        width: 0;
        background-color: #4caf50;
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
        <a href="#" class="nav-link" data-toggle="modal" data-target="#modal-morefiles"><i class="fa fa-file-zipper"></i> Attach More Files</a>
    </li>
</ul>
@endsection

@section('content')
<div class="main">
    <div class="ml-3">
        <h4 class="mb-2 pt-3">Home</h4>
        <h5 class="mb-2 mt-4"><a href="{{ URL::to('/secretary') }}">Folders</a> <i class="fa fa-square-caret-right"></i> {{ $foldername }} <i class="fa fa-square-caret-right"></i> {{ $subfoldername }}</h5>
        <div class="card card-widget widget-user-2" style="width: 95%;">
            <ul class="nav flex-column">
                @php
                $bgClasses = ['bg-primary', 'bg-info', 'bg-danger', 'bg-warning', 'bg-navy'];
                @endphp

                @foreach ($files as $file)

                @php
                $randomBgClass = $bgClasses[array_rand($bgClasses)];
                @endphp

                @if(strpos($file['name'], 'Split Commission Request') !== false)
                <li class="nav-item">
                    <span class="nav-link">
                        <a href="{{ asset('/secretaries') }}/{{ $user }}/{{ $foldername }}/{{ $subfoldername }}/{{ $file['name'] }}" target="_blank">{{ $file['name'] }}
                            <span class="badge {{ $randomBgClass }} text-uppercase">{{ $file['extension'] }}</span>
                        </a>
                        <button type="button" class="float-right btn btn-xs btn-primary reUploadBtn" id="{{ $file['name'] }}" data-toggle="modal" data-target="#modal-reupload">
                            Reupload Split Comm File
                        </button>
                    </span>
                </li>
                @else
                <li class="nav-item">
                    <a href="{{ asset('/secretaries') }}/{{ $user }}/{{ $foldername }}/{{ $subfoldername }}/{{ $file['name'] }}" target="_blank" class="nav-link">
                        {{ $file['name'] }} <span class="badge {{ $randomBgClass }} text-uppercase">{{ $file['extension'] }}</span>
                    </a>
                </li>
                @endif
                @endforeach
            </ul>
        </div>
    </div>
</div>
<div class="modal fade" id="modal-morefiles">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Attachment Files</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="files-splitcomm-upload" action="{{ route('upload') }}" method="post" enctype="multipart/form-data">
                <div class="modal-body">
                    @csrf
                    <div class="form-group">
                        <label for="splitcommfiles">File input</label>
                        <div class="input-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="splitcommfiles" name="splitcommfiles[]" multiple>
                                <label class="custom-file-label" for="splitcommfiles">Choose file</label>
                            </div>
                        </div>
                    </div>
                    <input type="hidden" id="splitcomm-path" name="splitcomm-path" value="secretaries/{{ $user }}/{{ $foldername }}/{{ $subfoldername }}">
                    <div id="progress-container" style="display: none;">
                        <div class="progress-bar" id="progress-bar"></div>
                    </div>
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
<div class="modal fade" id="modal-reupload">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Reupload Split Commission Request</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="reupload-splitcomm" action="{{ route('reupload.splitcomm') }}" method="post" enctype="multipart/form-data">
                <div class="modal-body">
                    <div class="form-group">
                        <label for="reuploadfile">File input</label>
                        <div class="input-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="reuploadfile" name="reuploadfile" accept="image/png, image/gif, image/jpeg">
                                <label class="custom-file-label" for="reuploadfile">Choose file</label>
                            </div>
                        </div>
                    </div>
                    <input type="hidden" id="splitcomm-path" name="splitcomm-path" value="secretaries/{{ $user }}/{{ $foldername }}/{{ $subfoldername }}">
                    <input type="hidden" id="splitcomm-filename" name="splitcomm-filename">
                    <input type="hidden" id="splitcomm-datetime" name="splitcomm-datetime">
                    <input type="hidden" id="splitcomm-user" name="splitcomm-user" value="{{ $user }}">
                    <input type="hidden" id="splitcomm-memberid" name="splitcomm-memberid" value="{{ $memberid }}">
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
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
<script src="{{ asset('js/adminlte.min.js') }}"></script>
<script src="{{ asset('js/demo.js') }}"></script>
<script>
    $('#files-splitcomm-upload').submit(function(e) {
        e.preventDefault();

        var formData = new FormData(this);
        var progressBar = $('#progress-bar');
        var progressContainer = $('#progress-container');
        $('#progress-container').css('display', 'block !important');
        progressContainer.show();
        progressBar.width('0%');
        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener('progress', function(event) {
                    if (event.lengthComputable) {
                        var percent = (event.loaded / event.total) * 100;
                        progressBar.width(percent + '%');

                        // Check if progress is complete (100%)
                        if (percent >= 100) {
                            setTimeout(function() {
                                location.reload(); // Refresh the page
                            }, 1000); // Delay for 1 second before refreshing
                        }
                    }
                }, false);
                return xhr;
            },
            success: function(response) {
                // Handle success response
            },
            error: function(xhr) {
                // Handle error response
            },
            complete: function() {
                progressContainer.hide();
            }
        });
    });

    $('.reUploadBtn').click(function() {
        var reUploadButtonId = $(this).attr('id');

        const currentDateTime = new Date();

        const year = currentDateTime.getFullYear();
        const month = ('0' + (currentDateTime.getMonth() + 1)).slice(-2); // Adding 1 because months are 0-indexed
        const day = ('0' + currentDateTime.getDate()).slice(-2);
        const hours = ('0' + currentDateTime.getHours()).slice(-2);
        const minutes = ('0' + currentDateTime.getMinutes()).slice(-2);
        const seconds = ('0' + currentDateTime.getSeconds()).slice(-2);

        const formattedDateTime = `${year}-${month}-${day} ${hours}${minutes}${seconds}`;

        $('#splitcomm-filename').val(reUploadButtonId);
        $('#splitcomm-datetime').val(formattedDateTime);
    });

    $('#reupload-splitcomm').submit(function(e) {
        e.preventDefault();

        var formData = new FormData(this);
        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            headers: {
                'X-CSRF-TOKEN': '{{ csrf_token() }}'
            },
            success: function(response) {
                // Handle success response
                location.reload(); // Refresh the page
            },
            error: function() {
                console.error('Failed to save image');
            }
        });
    });
</script>
@endsection