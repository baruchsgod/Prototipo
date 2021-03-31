'use strict'

$(document).ready(function() {
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
                                <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/login.html">Login</a></li>
                                <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/register.html">Registro</a></li>
                                </ul>
                        </li>
                        <!-- Fin Módulo Acceso  -->
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
                                <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/administrador/HUM3-001.html">Administrar usuarios</a></li>
                                <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/administrador/HUM3-002.html">Administrar informacion muro</a></li>
                                <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/administrador/HUM3-003.html">Informar Usuarios</a></li>
                                <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/administrador/HUM3-004.html">Administrar reportes</a></li>
                                <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/administrador/HUM3-005-1.html">Crear cuenta usuario</a></li>
                                <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/administrador/HUM3-005-2.html">Editar cuentas</a></li>
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
                                <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Empleado/HUEM-001.html">Modificar Empleado</a></li>
                                <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Empleado/HUEM-002.html">Crear Dieta</a></li>
                                <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Empleado/HUEM-002-01.html">Modificar Dieta</a></li>
                                <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Empleado/HUEM-003.html">Crear Rutina</a></li>
                                <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Empleado/HUEM-003-01.html">Modificar Rutina</a></li>
                                <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Empleado/HUEM-004.html">Ver Calendario</a></li>
                                <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Empleado/HUEM-005.html">Crear Metricas</a></li>
                                <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Empleado/HUEM-005-01.html">Modificar Metricas</a></li>
                                <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Empleado/HUEM-006.html">Historial Cliente</a></li>


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
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Reportes/hurm-001.html">Clientes Activos</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Reportes/hurm-002.html">Arqueo de Caja</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Reportes/hurm-003.html">Facturación</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Reportes/hurm-004-1.html">Lista de eventos</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Reportes/hurm-004-2.html">Reporte de reservas</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/Reportes/hurm-005-1.html">Reporte de retroalimentación</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/administrador/HURM-006-1.html">Planes de dietas</a></li>
<<<<<<< HEAD
                                          <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/administrador/HURM-006-2.html">Log de errores</a></li>
=======
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/administrador/HURM-006-2.html">Log de errores</a></li>
                                        <li><a class="dropdown-item" href="https://baruchsgod.github.io/Prototipo/administrador/HURM-007.html">Ver historial</a></li>
>>>>>>> c5ba5b1407f7f8a89f52757cceeb626a7d65f469
                                </ul>
                        </li>
                        <!-- Fin Módulo Reporte  -->
                </ul>
        </div>
</div>
`
    document.getElementById('navegacion').innerHTML = htmlmenu;
});
