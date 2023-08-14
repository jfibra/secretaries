<!-- Navbar -->
<nav class="main-header navbar navbar-expand navbar-dark navbar-light">

  @yield('topnav')

  <!-- Right navbar links -->
  <ul class="navbar-nav ml-auto">

    <li class="nav-item">
      <a class="nav-link" data-widget="fullscreen" href="#" role="button">
        <i class="fas fa-expand-arrows-alt"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
        <i class="fas fa-th-large"></i>
      </a>
    </li>
  </ul>
</nav>
<!-- /.navbar -->

<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-light-danger">
  <!-- Brand Logo -->
  <a href="{{ URL::to('/secretary') }}" class="brand-link bg-dark">
    <img src="{{ asset('images/fhlogo.png') }}" class="brand-image img-circle elevation-3" style="opacity: .8">
    <span class="brand-text font-weight-light">Leuterio Realty</span>
  </a>

  <!-- Sidebar -->
  <div class="sidebar os-theme-dark">

    <!-- Sidebar Menu -->
    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li class="nav-item user-panel">
          <a href="{{ URL::to('/secretary') }}" class="nav-link">
            <i class="nav-icon fas fa-th"></i>
            <p>
              Home
            </p>
          </a>
        </li>
      </ul>
    </nav>
    <!-- /.sidebar-menu -->
  </div>
  <!-- /.sidebar -->
</aside>

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">

  <!-- Main content -->
  <section class="content">