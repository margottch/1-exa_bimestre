// ===================================================================
// 1. CONTRATO DE TIPADO ESTRICTO (INTERFACE)
// ===================================================================
interface Docente {
    id: string;
    nombre: string;
    materia: string;
    aniosServicio: number;
    esTitular: boolean;
}

// ===================================================================
// 2. CREACIÓN DEL OBJETO DE PRUEBA (Corrección de 'any' a 'Docente')
// ===================================================================
const nuevoDocente: Docente = { 
    id: "INF-207",   
    nombre: "Félix Maldonado", 
    materia: "Diseño y Programación Web II",        
    aniosServicio: 7,   
    esTitular: false 
};             

// ===================================================================
// 3. FUNCIÓN DE NEGOCIO (Tipado estricto en parámetros y retorno)
// ===================================================================
function evaluarTitularidad(docente: Docente): Docente { 
    // Lógica senior: Si tiene más de 5 años de servicio, obtiene la titularidad
    if (docente.aniosServicio > 5) {
        docente.esTitular = true;
    } else {
        docente.esTitular = false;
    }
    
    return docente; 
}    

// ===================================================================
// 4. EJECUCIÓN DEL PROCESO
// ===================================================================
const docenteEvaluado = evaluarTitularidad(nuevoDocente); 

// Verificación por consola requerida por el examen
console.log(`¿El docente ${docenteEvaluado.nombre} es titular?: ${docenteEvaluado.esTitular}`);

// ===================================================================
// 5. INYECCIÓN EN LA INTERFAZ GRÁFICA (DOM)
// ===================================================================
const cajaContenedor = document.getElementById("app");

if (cajaContenedor) {
    // Definimos estilos dinámicos de acuerdo al estado de titularidad obtenido
    const fondoBadge = docenteEvaluado.esTitular ? "#065f46" : "#854d0e";
    const colorTextoBadge = docenteEvaluado.esTitular ? "#34d399" : "#fef08a";
    const mensajeEstado = docenteEvaluado.esTitular ? "✓ PERSONAL TITULAR" : "⚠ PERSONAL INTERINO";

    cajaContenedor.innerHTML = `
        <p><strong>Código ID:</strong> <code>${docenteEvaluado.id}</code></p>
        <p><strong>Docente:</strong> ${docenteEvaluado.nombre}</p>
        <p><strong>Materia:</strong> ${docenteEvaluado.materia}</p>
        <p><strong>Años de Servicio:</strong> ${docenteEvaluado.aniosServicio} años</p>
        
        <div class="badge-titularidad" style="background-color: ${fondoBadge}; color: ${colorTextoBadge};">
            ${mensajeEstado}
        </div>
    `;
} else {
    console.error("Error crítico: El contenedor 'app' no existe en el DOM.");
}