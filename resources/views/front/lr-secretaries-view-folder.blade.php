@extends('front.lr-front')

@section('title', 'File Management | View Folder')

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
    <a href="#" class="nav-link" data-toggle="modal" data-target="#modal-splitcomm"><i class="fa fa-file-pdf"></i> New Split Commission Request</a>
  </li>
</ul>
@endsection

@section('content')
<div class="main">
  <div class="ml-3">
    <h4 class="mb-2 pt-3">Home</h4>
    <h5 class="mb-2 mt-4"><a href="{{ URL::to('/secretary') }}">Folders</a> <i class="fa fa-square-caret-right"></i> {{ $foldername }}</h5>
    <div class="row">
      <div class="card card-widget widget-user-2" style="width: 95%;">
        <ul class="nav flex-column">
          @foreach($folders_list as $folders) 
          <li class="nav-item">
            <a href="{{ URL::to('/view-subfolder') }}/{{ $foldername }}/{{ $folders->foldername }}" class="nav-link">
              {{ $folders->foldername }} 
            </a>
          </li>
          @endforeach
        </ul>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="modal-splitcomm">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Split Commission Request</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form id="submit-splitcomm">
        <div class="modal-body">
          <div class="row">
            <div class="form-group cool-sm-12 col-md-12">
              <label for="developer">Developer</label>
              <input type="text" class="form-control" id="developer" name="developer" required>
            </div>
            <div class="form-group col-sm-8 col-md-8">
              <label for="agentname">Name of Agent</label>
              <input type="text" class="form-control" id="agentname" name="agentname" required>
            </div>
            <div class="form-group col-sm-4 col-md-4">
              <label for="agentrate">Agent Rate</label>
              <select class="form-control" id="agentrate" name="agentrate" required>
                <option value="2">2%</option>
                <option value="2.5">2.5%</option>
                <option value="3">3%</option>
                <option value="3.5">3.5%</option>
                <option value="4">4%</option>
                <option value="4.5">4.5%</option>
                <option value="5">5%</option>
              </select>
            </div>
            <div class="form-group col-sm-8 col-md-8">
              <label for="leuterio">Leuterio Realty & Brokerage</label>
              <input type="text" class="form-control" id="leuterio" name="leuterio" disabled="disabled">
            </div>
            <div class="form-group col-sm-4 col-md-4">
              <label for="lrrate">LR Rate</label>
              <input type="number" class="form-control" id="lrrate" name="lrrate" disabled="disabled">
            </div>
            <div class="form-group col-sm-8 col-md-8">
              <label for="tlname">Team Leader</label>
              <input type="text" class="form-control" id="tlname" name="tlname" value="{{ $sales_team_leader[0]->team_leader }}" disabled="disabled">
            </div>
            <div class="form-group col-sm-4 col-md-4">
              <label for="tlrate">Team Leader Rate</label>
              <input type="number" class="form-control" id="tlrate" name="tlrate" disabled="disabled">
            </div>
            <div class="form-group col-sm-12 col-md-12">
              <label for="buyername">Name of Buyer</label>
              <input type="text" class="form-control" id="buyername" name="buyername" required>
            </div>
            <div class="form-group col-sm-4 col-md-4">
              <label for="projectname">Name of Project</label>
              <input type="text" class="form-control" id="projectname" name="projectname" required>
            </div>
            <div class="form-group col-sm-4 col-md-4">
              <label for="unit">Units</label>
              <input type="text" class="form-control" id="unit" name="unit">
            </div>
            <div class="form-group col-sm-4 col-md-4">
              <label for="datereserved">Date Reserved</label>
              <div class="input-group date" id="reservationdate" data-target-input="nearest">
                <input type="text" class="form-control datetimepicker-input" id="datereserved" name="datereserved" data-target="#reservationdate" data-toggle="datetimepicker" />
                <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                  <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                </div>
              </div>
            </div>
            <span class="text-danger text-bold">Note : Official receipt shall be provided by the agent or team leader</span>
            <div class="card mt-3">
              <div class="card-header bg-danger">
                <div class="card-title">Note : Client's requirements submitted are the following:</div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="form-group col-sm-6 col-md-6">
                    <div class="icheck-primary d-inline">
                      <input type="checkbox" id="signedbuyers" name="signedbuyers">
                      <label for="signedbuyers">
                        Signed buyers Info sheet
                      </label>
                    </div><br>
                    <div class="icheck-primary d-inline">
                      <input type="checkbox" id="signedreservation" name="signedreservation">
                      <label for="signedreservation">
                        Signed reservation agreement
                      </label>
                    </div><br>
                    <div class="icheck-primary d-inline">
                      <input type="checkbox" id="signedcontract" name="signedcontract">
                      <label for="signedcontract">
                        Signed contract to sell
                      </label>
                    </div><br>
                    <div class="icheck-primary d-inline">
                      <input type="checkbox" id="signedamortization" name="signedamortization">
                      <label for="signedamortization">
                        Signed amortization sheet
                      </label>
                    </div><br>
                    <div class="icheck-primary d-inline">
                      <input type="checkbox" id="marriagecert" name="marriagecert">
                      <label for="marriagecert">
                        Marriage certificate if married
                      </label>
                    </div>
                  </div>
                  <div class="form-group col-sm-6 col-md-6">
                    <div class="icheck-primary d-inline">
                      <input type="checkbox" id="incomeproof" name="incomeproof">
                      <label for="incomeproof">
                        Proof of Income
                      </label>
                    </div><br>
                    <div class="icheck-primary d-inline">
                      <input type="checkbox" id="validid" name="validid">
                      <label for="validid">
                        2 Valid ID
                      </label>
                    </div><br>
                    <div class="icheck-primary d-inline">
                      <input type="checkbox" id="postdated" name="postdated">
                      <label for="postdated">
                        Post Dated checks
                      </label>
                    </div><br>
                    <div class="icheck-primary d-inline">
                      <input type="checkbox" id="SPA" name="SPA">
                      <label for="SPA">
                        SPA if applicable
                      </label>
                    </div><br>
                    <div class="icheck-primary d-inline">
                      <input type="checkbox" id="birthcert" name="birthcert">
                      <label for="birthcert">
                        Birth certificate if single
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input type="hidden" id="user" name="user" value="{{ $user }}">
          <input type="hidden" id="memberid" name="memberid" value="{{ $memberid }}">
          <input type="hidden" id="subfolderid" name="subfolderid" value="{{ $folderid }}">
          <input type="hidden" id="sales_team_leader" name="sales_team_leader" value="{{ $sales_team_leader[0]->team_leader }}">
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
<div class="modal fade" id="modal-files">
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
          <input type="hidden" id="splitcomm-path" name="splitcomm-path">
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
  const BASE_URL = "{{ url('/') }}";

  //Date picker
  $('#reservationdate').datetimepicker({
    format: 'L'
  });

  const canvasWidth = 1653;
  const canvasHeight = 2339;
  var form = document.querySelector("#submit-splitcomm");


  var form = document.querySelector("#submit-splitcomm");

  form.addEventListener("submit", function(event) {
    var inputs = form.querySelectorAll("input[required]");
    var allFilled = true;

    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === "") {
        allFilled = false;
        break;
      }
    }

    if (allFilled) {
      console.log("All required inputs are filled.");
      // Close the first modal
      $("#modal-splitcomm").modal("hide");
      // Open the second modal
      $("#modal-files").modal("show");
    }
  });

  document.getElementById('submit-splitcomm').addEventListener('submit', function(event) {
    // Get the values of the input fields
    event.preventDefault(); // Prevent form submission

    const developer = document.getElementById('developer').value;
    const agentname = document.getElementById('agentname').value;
    const agentrate = document.getElementById('agentrate').value;
    const leuterio = document.getElementById('leuterio').value;
    const lrrate = document.getElementById('lrrate').value;
    const buyername = document.getElementById('buyername').value;
    const projectname = document.getElementById('projectname').value;
    const unit = document.getElementById('unit').value;
    const datereserved = document.getElementById('datereserved').value;
    const signedbuyers = document.getElementById('signedbuyers').checked;
    const signedreservation = document.getElementById('signedreservation').checked;
    const signedcontract = document.getElementById('signedcontract').checked;
    const signedamortization = document.getElementById('signedamortization').checked;
    const marriagecert = document.getElementById('marriagecert').checked;
    const incomeproof = document.getElementById('incomeproof').checked;
    const validid = document.getElementById('validid').checked;
    const postdated = document.getElementById('postdated').checked;
    const spaapplicable = document.getElementById('SPA').checked;
    const birthcert = document.getElementById('birthcert').checked;
    const user = document.getElementById('user').value;
    const memberid = document.getElementById('memberid').value;
    const subfolderid = document.getElementById('subfolderid').value;
    const sales_team_leader = document.getElementById('sales_team_leader').value;

    const canvas = document.createElement('canvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const context = canvas.getContext('2d');

    // Load the background image
    const img = new Image();
    img.crossOrigin = "anonymous"; // If needed, set the crossOrigin attribute to handle CORS issues
    img.src = `${BASE_URL}/images/split-commission.png`;

    // After the background image is loaded, draw it on the canvas
    img.onload = function() {
      context.drawImage(img, 0, 0, canvasWidth, canvasHeight);

      context.font = "40px Helvetica";
      context.fillStyle = "black";
      context.fillText(developer, 415, 520);

      context.font = "bold 40px Helvetica";
      context.fillStyle = "black";
      context.fillText(agentname, 400, 670);
      context.fillText(agentrate + ' %', 1400, 670);
      context.fillText(sales_team_leader, 400, 810);
      context.fillText(buyername, 400, 880);
      context.fillText(datereserved, 400, 950);
      context.fillText(projectname + ' / ' + unit, 400, 1020);

      context.font = "bold 45px Helvetica";
      context.fillStyle = "black";
      const textWidth = context.measureText(user).width;
      const xCentered = 400 - textWidth / 2;
      context.fillText(user, xCentered, 1260);

      const textWidth2 = context.measureText(sales_team_leader).width;
      const xCentered2 = 1200 - textWidth2 / 2;
      context.fillText(sales_team_leader, xCentered2, 1260);

      context.font = "bold 45px Helvetica";
      context.fillStyle = "black";
      if (signedbuyers == true) {
        context.fillText('✔', 110, 1595);
      }

      if (signedreservation == true) {
        context.fillText('✔', 110, 1645);
      }

      if (signedcontract == true) {
        context.fillText('✔', 110, 1705);
      }

      if (signedamortization == true) {
        context.fillText('✔', 110, 1760);
      }

      if (marriagecert == true) {
        context.fillText('✔', 110, 1815);
      }

      if (incomeproof == true) {
        context.fillText('✔', 110, 1865);
      }

      if (validid == true) {
        context.fillText('✔', 110, 1925);
      }

      if (postdated == true) {
        context.fillText('✔', 110, 1975);
      }

      if (spaapplicable == true) {
        context.fillText('✔', 110, 2035);
      }

      if (birthcert == true) {
        context.fillText('✔', 110, 2085);
      }
      var folder = @json($foldername); // Convert the PHP variable to a JavaScript variable
      var username = @json($user);
      var location = username + '/' + folder;
      const currentDateTime = new Date();

      const year = currentDateTime.getFullYear();
      const month = ('0' + (currentDateTime.getMonth() + 1)).slice(-2); // Adding 1 because months are 0-indexed
      const day = ('0' + currentDateTime.getDate()).slice(-2);
      const hours = ('0' + currentDateTime.getHours()).slice(-2);
      const minutes = ('0' + currentDateTime.getMinutes()).slice(-2);
      const seconds = ('0' + currentDateTime.getSeconds()).slice(-2);

      const formattedDateTime = `${year}-${month}-${day} ${hours}${minutes}${seconds}`;
      var foldernew = agentname + ' - ' + buyername + ' - ' + developer + ' - ' + formattedDateTime;
      // Check if the folder exists, create it if not
      const newfolderlocation = 'secretaries/' + location + '/' + foldernew;
      $('#splitcomm-path').val(newfolderlocation);
      var folderurl = `{{ URL::to('/${username}/${folder}/${foldernew}/${memberid}/${subfolderid}') }}`;
      $.ajax({
        url: folderurl,
        type: 'GET',
        headers: {
          'X-CSRF-TOKEN': '{{ csrf_token() }}' // Add the CSRF token to the headers
        },
        success: function(data) {
          console.log(newfolderlocation);
          console.log(formattedDateTime);

          var splitcommfile = 'Split Commission Request - ' + agentname + ' ' + formattedDateTime;
          const dataURL = canvas.toDataURL(); // Convert the canvas to a data URL

          // Convert the data URL to a buffer
          const dataconvert = atob(dataURL.split(',')[1]);
          const buffer = new Uint8Array(dataconvert.length);
          for (let i = 0; i < dataconvert.length; i++) {
            buffer[i] = dataconvert.charCodeAt(i);
          }

          // Construct the file path
          const filePath = newfolderlocation + '/' + splitcommfile;

          // Create a FormData object to send the file
          const formData = new FormData();
          formData.append('image', new Blob([buffer], {
            type: 'image/png'
          }), splitcommfile);

          formData.append('newfolderlocation', newfolderlocation);
          formData.append('splitcommfile', splitcommfile);

          // Send a POST request to save the image using Laravel's CSRF protection
          $.ajax({
            url: '/splitcomm/create', // Update this URL to match your Laravel route
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            headers: {
              'X-CSRF-TOKEN': '{{ csrf_token() }}'
            },
            success: function(data) {
              console.log('Image saved:', data.message);
            },
            error: function() {
              console.error('Failed to save image');
            }
          });

        }
      });
    };

  });

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
</script>
@endsection