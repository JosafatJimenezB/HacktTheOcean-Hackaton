![](./assets/header.png)

# HackTheOcean :turtle:

## Preservacion de especies maritimas en peligro de extincion

## Metas

- Detectar avistamientos.
- Detencion de especies
- Captura de Ubicacion
- Captura de calidad de habitad

## Front End

- Landing page.
- Imagenes de especies en peligro de extincion.
- Informacion sobre la pezca.
- Causa de muerte
- Soluciones
- Publicidad
- Donaciones
- Organizaciones que apoyan a la causa
- Mapa especies
- Mockups

## Backend

- CRUD.
- Base de datos.
- API's.
- Pruebas de unidad.
- Dependencias.
- Tecnologias(NodeJS).

## Herramientas

- Base de datos: PostgresSql

# Tablas

```mermaid
 classDiagram
      class Especie{
          + id (Int)
          + especie(varchar(128))
          + nombreCientifico(varchar(128))
          + familia(varchar(128))
          + biologo_id(fk)
          + dateCreated (DateTime now())
          + lastUpdated (DateTime)
      }
      class Biologo{
          + id
          + nombre(varchar(128))
          + organizacion(varchar(128))
          + especialidad(charfield)
          + pais(varchar(128))
          + dateCreated (DateTime now())
          + lastUpdated (DateTime)
      }
      class Ubicaciones{
          + id
          + coordenadas (varchar(255))
          + ph(Float)
          + especie_id(fk)
          + biologo_id(fk)
          + dateCreated (DateTime now())
          + lastUpdated (DateTime)
      }
      
```

## Actualizaciones

- Idioma ingles
- Otras Especies no marinas
