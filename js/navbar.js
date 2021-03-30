'use strict'

$(document).ready(function () {
var htmlmenu = `
<div class="container-fluid">
        <a class="navbar-brand" href="https://baruchsgod.github.io/Prototipo/menu.html">Energym</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                        <!-- Inicio Módulo Acceso -->
                        <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Módulo Acceso
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                </ul>
                        </li>
                        <!-- Fin Módulo Acceso  -->
                        <!-- Inicio Login -->
                        <li class="nav-item">
                          <a class="nav-link" href="https://baruchsgod.github.io/Prototipo/login.html">Login</a>
                        </li>
                        <!-- Fin Login -->
                        <!-- Inicio Registro -->
                        <li class="nav-item">
                          <a class="nav-link" href="https://baruchsgod.github.io/Prototipo/register.html">Registro</a>
                        </li>
                        <!-- Fin Registro -->
                        <!-- Inicio Módulo Cliente -->
                        <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Módulo Cliente
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Cliente/HUM2-001-1.html">Actualizar datos personales</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Cliente/HUM2-002-1.html">Desactivar cuenta</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Cliente/HUM2-002-2.html">Reactivar cuenta</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Cliente/HUM2-003-1.html">Crear reserva</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Cliente/HUM2-003-2.html">Modificar reserva</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Cliente/HUM2-003-3.html">Listar reservas</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Cliente/HUM2-003-4.html">Eliminar reservas</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Cliente/HUM2-004-1.html">Enviar comentario</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Cliente/HUM2-004-2.html">Lista de comentarios</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Cliente/HUM2-005-1.html">Ver plan de dieta</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Cliente/HUM2-006-1.html">Ver plan de entrenamiento</a></li>
                                </ul>
                        </li>
                        <!-- Fin Módulo Cliente -->
                        <!-- Inicio Módulo Administrador -->
                        <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Módulo Administración
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                </ul>
                        </li>
                        <!-- Fin Módulo Administrador  -->
                        <!-- Inicio Módulo Pago -->
                        <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Módulo Pagos
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Pagos/hump-0011.html">Asignar Membresía</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Pagos/hump-0012.html">Ingresar Cliente a Facturación</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Pagos/hump-0013.html">Crear Pago</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Pagos/hump-0014.html">Aplicar Pago</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Pagos/hump-0015.html">Crear Nota de Crédito</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Pagos/hump-0016.html">Crear Nota de Débito</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Pagos/hump-0031.html">Balance Inicial</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Pagos/hump-0032.html">Arqueo de Caja</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Pagos/hump-0041.html">Establecer Balance</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Pagos/hump-0042.html">Modificar Balance</a></li>
                                </ul>
                        </li>
                        <!-- Fin Módulo Pago  -->
                        <!-- Inicio Módulo Empleados -->
                        <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Módulo Empleado
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                </ul>
                        </li>
                        <!-- Fin Módulo Empleados  -->
                        <!-- Inicio Módulo Reporte -->
                        <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Módulo Reporte
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Empleado/HUEM-006.html">Crear</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Reportes/hurm-001.html">Clientes Activos</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Reportes/hurm-002.html">Arqueo de Caja</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Reportes/hurm-003.html">Facturación</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Reportes/hurm-004-1.html">Lista de eventos</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Reportes/hurm-004-2.html">Reporte de reservas</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Reportes/hurm-005-1.html">Reporte de retroalimentación</a></li>
                                </ul>
                        </li>
                        <!-- Fin Módulo Reporte  -->
                </ul>
        </div>
</div>
`
document.getElementById('navegacion').innerHTML = htmlmenu;
});
