<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="{{ asset('plugins/pace-progress/themes/blue/pace-theme-flat-top.css') }}">
    @yield('css-links')
    @yield('javascript-links')
</head>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
</style>

<body class="hold-transition sidebar-mini">
    @include('front.lr-header')

    @yield('content')

    <div class="modal fade" id="modal-secsign">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Attach Secretary Signature</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form method="post" action="{{ route('create.signature') }}" id="signatureForm">
                    @csrf
                    <div class="modal-body">
                        <canvas id="signatureCanvas" width="750" height="500" style="border: 1px solid black;"></canvas>
                        <br>
                        <button type="button" id="clearButton" class="btn btn-info btn-md">Clear Signature</button>
                        <input type="hidden" name="user" value="{{ $user }}">
                        <input type="hidden" name="memberid" value="{{ $memberid }}">
                        <input type="hidden" name="signatureImage">
                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" id="saveSignatureCanvas" class="btn btn-primary">Save changes</button>
                    </div>
                </form>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <div class="modal fade" id="modal-viewsign">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">View Uploaded Secretary Signature</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    @php
                    $signature = \App\Models\Signatures::where('secretaryid', '=', '1')->get();
                    $sign = '';
                    if ($signature->count() > 0) {
                    $sign = $signature[0]->filename;
                    }
                    @endphp
                    <img class="img-fluid" src="{{ URL::to('/signatures') }}/{{ $sign }}">
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    @include('front.lr-footer')

    <!-- THIRD PARTY JS -->
    <script src="{{ asset('plugins/jquery/jquery.min.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="{{ asset('plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('plugins/pace-progress/pace.min.js') }}"></script>
    <script src="{{ asset('js/axios.min.js') }}"></script>
    <script>
        const modal = document.getElementById('modal-secsign'); // Replace 'yourModalId' with the actual ID of your modal
        const canvas = modal.querySelector('#signatureCanvas');
        const clearButton = modal.querySelector('#clearButton');
        const saveButton = document.getElementById('saveSignatureCanvas');
        const context = canvas.getContext('2d');
        let isDrawing = false;

        saveButton.addEventListener('click', () => {
            const image = canvas.toDataURL('image/png');

            const form = document.querySelector('#signatureForm');
            const imageInput = form.querySelector('input[name="signatureImage"]');
            imageInput.value = image;

            form.submit();
        });

        canvas.addEventListener('mousedown', (event) => {
            isDrawing = true;
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            context.beginPath();
            context.moveTo(x, y);
        });

        canvas.addEventListener('mousemove', (event) => {
            if (!isDrawing) return;
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            context.lineWidth = 2;
            context.lineCap = 'round';
            context.strokeStyle = 'black';

            context.lineTo(x, y);
            context.stroke();
            context.beginPath();
            context.moveTo(x, y);
        });

        canvas.addEventListener('mouseup', () => {
            isDrawing = false;
        });

        canvas.addEventListener('mouseout', () => {
            isDrawing = false;
        });

        clearButton.addEventListener('click', () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
        });
    </script>

    @yield('javascript-explicit-methods')

</body>

</html>