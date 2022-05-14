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
          + id
          + especie(charfield)
          + ubicacion(charfield)
          + pais(fk)
          + estado(fk)
          + municipio(fk)
      }
      class Biologo{
          + id
          + nombre(charfield)
          + origen(charfield)
          + especialidad(charfield)
      }
      class Ubicaciones{
          + id
          + fecha(datetimefield)
          + coordenadas(char)
          + biologo(fk)
          + especie(fk)
      }
      class Habitad{
          + id
          + ph_agua(integerfield)
          + nivel_pesca(ChoicesField)
          + coordenadas(char)
          + biologo(fk)
          + especie(fk)
      }
```

## Actualizaciones

- Idioma ingles
- Otras Especies no marinas
