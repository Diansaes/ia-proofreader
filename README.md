# IA Proofreader

Herramienta backend que analiza documentos PDF y proporciona sugerencias de mejora de estilo mediante inteligencia artificial. Utiliza GPT-4 para evaluar claridad, coherencia, sintaxis, ortografía y estructura del contenido, actuando como corrector profesional de estilos.

## 🎯 Objetivo

Automatizar el proceso de revisión y mejora de textos mediante análisis semántico e identificación de redundancias, inconsistencias y errores de redacción que afecten la legibilidad y profesionalismo del documento.

## 🛠️ Stack Tecnológico

- **Runtime:** Node.js
- **Framework:** NestJS 11
- **Lenguaje:** TypeScript 5.7
- **Testing:** Jest
- **Linting:** ESLint + Prettier
- **Integraciones:** OpenAI API, PDF Parse

## 📁 Estructura del Proyecto

```
src/
├── main.ts              # Punto de entrada de la aplicación
├── app.module.ts        # Módulo raíz de NestJS
├── app.controller.ts    # Controladores principales
├── app.service.ts       # Lógica de negocio
└── ...

test/                   # Suite de pruebas e2e
```

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js 18+
- npm o yarn
- Clave API de OpenAI

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/Diansaes/ia-proofreader.git
cd ia-proofreader

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env y agregar tu OPENAI_API_KEY
```

### Configuración de Entorno

```bash
# .env
OPENAI_API_KEY=sk-your-api-key-here
```

### Desarrollo

```bash
# Ejecutar en modo desarrollo con watch
npm run start:dev

# Ejecutar en modo debug
npm run start:debug

# Servidor disponible en: http://localhost:3000
```

### Producción

```bash
# Compilar
npm run build

# Ejecutar
npm run start:prod
```

## 📦 Scripts Disponibles

| Comando               | Descripción                                      |
| --------------------- | ------------------------------------------------ |
| `npm run start`       | Inicia la aplicación                             |
| `npm run start:dev`   | Inicia en modo desarrollo con auto-reload        |
| `npm run start:debug` | Inicia con debugger                              |
| `npm run build`       | Compila el proyecto                              |
| `npm run lint`        | Valida y corrige código                          |
| `npm run format`      | Formatea código con Prettier                     |
| `npm run clean`       | Limpia carpeta `dist`                            |
| `npm run test`        | Ejecutar suite de tests (cuando esté disponible) |

## 💡 Funcionalidad Principal

**Análisis de PDF y Corrección de Estilo**

1. El usuario carga un documento PDF
2. La herramienta extrae el contenido textual
3. Integración con OpenAI analiza:
   - Claridad del mensaje
   - Coherencia y fluidez
   - Errores de sintaxis y ortografía
   - Redundancias semánticas
   - Estructura y progresión lógica
4. Retorna propuestas de mejora y alternativas de redacción

## 📋 Dependencias Principales

- `@nestjs/common`, `@nestjs/core` - Framework backend
- `@nestjs/config` - Manejo de configuración
- `openai` - Integración con GPT-4
- `pdf-parse` - Extracción de contenido PDF
- `multer` - Manejo de cargas de archivos

## 📝 Licencia

UNLICENSED

## 👤 Autor

Diana S. - [@Diansaes](https://github.com/Diansaes)

---

**Nota:** Este proyecto está en construcción. Se pueden encontrar cambios significativos en futuras versiones.
