# PRIMERA EVALUACIÓN 2DO BIMESTRE DE DISEÑO Y PROGRAMACIÓN WEB II

**INFORMACIÓN DEL ESTUDIANTE**
* **Apellidos:** Tintaya Choque
* **Nombres:** Ana Margot
* **Curso:** 25-200-am
* **Fecha:** 29/05/2026

---

## I. PARTE TEÓRICA

### 1. Al trabajar con Programación Orientada a Objetos en TypeScript, ¿cuál es la función principal de una Interface en comparación con una Class?
* **Respuesta Correcta:** **B)** La Interface actúa puramente como un contrato de tipado estricto en tiempo de diseño que no genera código final en JS, mientras que la Class permite definir tanto estructura como comportamiento (métodos y constructores) que sí persisten en la compilación.

### 2. Al preparar el despliegue de un sitio web estático desde GitHub Desktop hacia Vercel, ¿qué acción crítica asegura que el motor de Vercel pueda leer el repositorio sin restricciones de credenciales académicas?
* **Respuesta Correcta:** **C)** Desmarcar la casilla "Keep this code private" al publicar el repositorio para hacerlo público.

---

## II. PARTE PRÁCTICA (70% - Saber Hacer)

A continuación se presenta la solución al reto técnico aplicando **Clean Code**, eliminando por completo los tipos genéricos `any` y abstrayendo la lógica del negocio mediante un contrato estructural estricto (`interface`).

### 1. Código Fuente TypeScript (`ExamenDocente.ts`)

```typescript
// ===================================================================
// 1. ESTRUCTURA ESTRICTA CON INTERFACE PARA DOCENTE
// ===================================================================
interface Docente {
    id: string;
    nombre: string;
    materia: string;
    aniosServicio: number;
    esTitular: boolean;
}

// Creación del objeto utilizando el contrato estricto de la Interface
const nuevoDocente: Docente = { 
    id: "INF-207",   
    nombre: "Félix Maldonado", 
    materia: "Diseño y Programación Web II",        
    aniosServicio: 7,   
    esTitular: false 
};             

// ===================================================================
// 2. FUNCIÓN DE NEGOCIO CON TIPADO ESTRICTO
// ===================================================================
function evaluarTitularidad(docente: Docente): Docente { 
    // Lógica de negocio: Si tiene más de 5 años de servicio, pasa a ser titular
    if (docente.aniosServicio > 5) {
        docente.esTitular = true;
    } else {
        docente.esTitular = false;
    }
    
    return docente; 
}    

// ===================================================================
// 3. EJECUCIÓN Y CONTROL
// ===================================================================
const docenteEvaluado = evaluarTitularidad(nuevoDocente); 

// Verificación por consola requerida por el documento base
console.log(`¿El docente ${docenteEvaluado.nombre} es titular?: ${docenteEvaluado.esTitular}`);

// ===================================================================
// 4. INYECCIÓN EN LA INTERFAZ GRÁFICA (DOM)
// ===================================================================
const cajaContenedor = document.getElementById("app");

if (cajaContenedor) {
    const fondoBadge = docenteEvaluado.esTitular ? "#065f46" : "#854d0e";
    const colorTextoBadge = docenteEvaluado.esTitular ? "#34d399" : "#fef08a";
    const mensajeEstado = docenteEvaluado.esTitular ? "✓ PERSONAL TITULAR" : "⚠ PERSONAL INTERINO";

    cajaContenedor.innerHTML = `
        <p><strong>Código ID:</strong> <code>${docenteEvaluado.id}</code></p>
        <p><strong>Docente:</strong> ${docenteEvaluado.nombre}</p>
        <p><strong>Materia:</strong> ${docenteEvaluado.materia}</p>
        <p><strong>Años de Servicio:</strong> ${docenteEvaluado.aniosServicio} años</p>
        
        <div class="badge-titularidad" style="background-color: ${fondoBadge}; color: ${colorTextoBadge}; padding: 8px; border-radius: 6px; text-align: center; font-weight: bold; margin-top: 15px;">
            ${mensajeEstado}
        </div>
    `;
} else {
    console.error("Error: El elemento contenedor con id 'app' no fue localizado.");
}
