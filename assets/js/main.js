const nombre = document.getElementById("nombre");
const direccion = document.getElementById("direccion");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const paginaWeb = document.getElementById("paginaWeb");
const resumen = document.getElementById("resumen");
const idiomas = document.getElementById("idiomas");
const empleos = document.getElementById("empleos");
const educacion = document.getElementById("educacion");
const habilidades = document.getElementById("habilidades");
const certificaciones = document.getElementById("certificaciones");

function CreateCV() {
  if (Validate()) {
    const valueNombre = nombre.value;
    const valueDireccion = direccion.value;
    const valueCorreo = correo.value;
    const valueTelefono = telefono.value;
    const valuePaginaWeb = paginaWeb.value;
    const valueResumen = resumen.value;
    const valueIdiomas = idiomas.value;
    const valueEmpleos = empleos.value;
    const valueEducacion = educacion.value;
    const valueHabilidades = habilidades.value;
    const valueCertificaciones = certificaciones.value;

    const mainContainer = document.getElementById("cv-container");

    const divCol8 = document.createElement("div");
    divCol8.setAttribute("class", "col-12 mt-3");

    const divCard = document.createElement("div");
    divCard.setAttribute("class", "card");

    const divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");

    const divRow = document.createElement("div");
    divRow.setAttribute("class", "row");

    const divCol6_1 = document.createElement("div");
    divCol6_1.setAttribute("class", "col-6");

    const h3Nombre = document.createElement("h3");
    h3Nombre.setAttribute("class", "card-title mb-5");
    h3Nombre.innerText = `${valueNombre}`;

    const h5Contacto = document.createElement("h5");
    h5Contacto.setAttribute("class", "card-title mb-4");
    h5Contacto.innerText = "Contacto";

    const hrContacto = document.createElement("hr");

    const ulContacto = document.createElement("ul");
    ulContacto.setAttribute("class", "list-group list-group-flush");

    const liDireccion = document.createElement("li");
    liDireccion.setAttribute("class", "list-group");
    liDireccion.innerText = `Direccion: ${valueDireccion}`;

    const liTelefono = document.createElement("li");
    liTelefono.setAttribute("class", "list-group");
    liTelefono.innerText = `Telefono: ${valueTelefono}`;
    
    const liCorreo = document.createElement("li");
    liCorreo.setAttribute("class", "list-group");
    liCorreo.innerText = `Correo: ${valueCorreo}`;

    const liPaginaWeb = document.createElement("li");
    liPaginaWeb.setAttribute("class", "list-group");
    liPaginaWeb.innerText = `Pagina web: ${valuePaginaWeb}`;

    const h5Idiomas = document.createElement("h5");
    h5Idiomas.setAttribute("class", "card-title mb-4");
    h5Idiomas.innerText = "Idiomas";

    const ulIdiomas = document.createElement("ul");
    ulIdiomas.setAttribute("class", "list-group list-group-flush");

    const liIdiomas = document.createElement("li");
    liIdiomas.setAttribute("class", "list-group-item");
    liIdiomas.innerText = `Idiomas: ${valueIdiomas}`;

    const hrIdiomas = document.createElement("hr");

    const divCol6_2 = document.createElement("div");
    divCol6_2.setAttribute("class", "col-6");

    const h5Resumen = document.createElement("h5");
    h5Resumen.setAttribute("class", "card-title mb-4");
    h5Resumen.innerText = "Resumen";

    const hrResumen = document.createElement("hr");

    const ulResumen = document.createElement("ul");
    ulResumen.setAttribute("class", "list-group list-group-flush");

    const liResumen = document.createElement("li");
    liResumen.setAttribute("class", "list-group-item");
    liResumen.innerText = `Resumen: ${valueResumen}`;

    const h5Habilidades = document.createElement("h5");
    h5Habilidades.setAttribute("class", "card-title mb-4");
    h5Habilidades.innerText = "Habilidades";

    const hrHabilidades = document.createElement("hr");

    const ulHabilidades = document.createElement("ul");
    ulHabilidades.setAttribute("class", "list-group list-group-flush");

    const liHabilidades = document.createElement("li");
    liHabilidades.setAttribute("class", "list-group-item");
    liHabilidades.innerText = `Habilidades: ${valueHabilidades}`;

    const h5Experiencia = document.createElement("h5");
    h5Experiencia.setAttribute("class", "card-title mb-4");
    h5Experiencia.innerText = "Experiencia";

    const hrExperiencias = document.createElement("hr");

    const ulExperiencias = document.createElement("ul");
    ulExperiencias.setAttribute("class", "list-group list-group-flush");

    const liExperiencias = document.createElement("li");
    liExperiencias.setAttribute("class", "list-group-item");
    liExperiencias.innerText = `Experiencias: ${valueEmpleos}`;

    const h5Educacion = document.createElement("h5");
    h5Educacion.setAttribute("class", "card-title mb-4");
    h5Educacion.innerText = "Educacion";

    const hrEducacion = document.createElement("hr");

    const ulEducacion = document.createElement("ul");
    ulEducacion.setAttribute("class", "list-group list-group-flush");

    const liEducacion = document.createElement("li");
    liEducacion.setAttribute("class", "list-group-item");
    liEducacion.innerText = `Educacion: ${valueEducacion}`;

    const h5Certificaciones = document.createElement("h5");
    h5Certificaciones.setAttribute("class", "card-title mb-4");
    h5Certificaciones.innerText = "Certificaciones";

    const hrCertificacion = document.createElement("hr");

    const ulCertificaciones = document.createElement("ul");
    ulCertificaciones.setAttribute("class", "list-group list-group-flush");

    const liCertificaciones = document.createElement("li");
    liCertificaciones.setAttribute("class", "list-group-item");
    liCertificaciones.innerText = `Certificaciones: ${valueCertificaciones}`;

    const btnDelete = document.createElement("button");
    btnDelete.setAttribute("class", "btn btn-outline-danger float-end mt-2");
    btnDelete.innerText = "Eliminar";
    btnDelete.addEventListener("click",function(){
       if(confirm("Estas seguro que deseas eliminar este CV?")){
           mainContainer.removeChild(divCol8);
       }
    })

    divCol8.appendChild(divCard);
    divCard.appendChild(divCardBody);
    divCardBody.appendChild(divRow);
    
    divRow.appendChild(divCol6_1);
    divCol6_1.appendChild(h3Nombre);
    divCol6_1.appendChild(h5Contacto);
    h5Contacto.appendChild(hrContacto);
    h5Contacto.appendChild(ulContacto);
    ulContacto.appendChild(liDireccion);
    ulContacto.appendChild(liTelefono);
    ulContacto.appendChild(liCorreo);
    ulContacto.appendChild(liPaginaWeb);
    divCol6_1.appendChild(h5Idiomas);
    h5Idiomas.appendChild(hrIdiomas);
    h5Idiomas.appendChild(ulIdiomas);
    ulIdiomas.appendChild(liIdiomas);

    divRow.appendChild(divCol6_2);
    divCol6_2.appendChild(h5Resumen);
    h5Resumen.appendChild(hrResumen);
    h5Resumen.appendChild(ulResumen);
    ulResumen.appendChild(liResumen);
    divCol6_2.appendChild(h5Habilidades);
    h5Habilidades.appendChild(hrHabilidades);
    h5Habilidades.appendChild(ulHabilidades);
    ulHabilidades.appendChild(liHabilidades);
    divCol6_2.appendChild(h5Experiencia);
    h5Experiencia.appendChild(hrExperiencias);
    h5Experiencia.appendChild(ulExperiencias);
    ulExperiencias.appendChild(liExperiencias);
    divCol6_2.appendChild(h5Educacion);
    h5Educacion.appendChild(hrEducacion);
    h5Educacion.appendChild(ulEducacion);
    ulEducacion.appendChild(liEducacion);
    divCol6_2.appendChild(h5Certificaciones);
    h5Certificaciones.appendChild(hrCertificacion);
    h5Certificaciones.appendChild(ulCertificaciones);
    ulCertificaciones.appendChild(liCertificaciones);

    divRow.appendChild(btnDelete);

    mainContainer.appendChild(divCol8);

    Clear();

  } else {
    alert("No puede dejar ningun campo vacio");
  }
}

function Clear() {  
  nombre.value = "";
  direccion.value = "";
  correo.value = "";
  telefono.value = "";
  paginaWeb.value = "";
  resumen.value = "";
  idiomas.value = "";
  empleos.value = "";
  educacion.value = "";
  habilidades.value = "";
  certificaciones.value = "";
}

function Validate() {
  let isValid = true;

  const valueNombre = nombre.value;
  const valueDireccion = direccion.value;
  const valueCorreo = correo.value;
  const valueTelefono = telefono.value;
  const valuePaginaWeb = paginaWeb.value;
  const valueResumen = resumen.value;
  const valueIdiomas = idiomas.value;
  const valueEmpleos = empleos.value;
  const valueEducacion = educacion.value;
  const valueHabilidades = habilidades.value;
  const valueCertificaciones = certificaciones.value;

  if (valueNombre == "" || valueNombre == null || valueNombre == undefined) {
    isValid = false;
  } 

  else if (valueDireccion == "" || valueDireccion == null || valueDireccion == undefined) {
    isValid = false;
  }

  else if (valueCorreo == "" || valueCorreo == null || valueCorreo == undefined) {
    isValid = false;
  }

  else if (valueTelefono == "" || valueTelefono == null || valueTelefono == undefined) {
    isValid = false;
  }

  else if (valuePaginaWeb == "" || valuePaginaWeb == null || valuePaginaWeb == undefined) {
    isValid = false;
  }

  else if (valueResumen == "" || valueResumen == null || valueResumen == undefined) {
    isValid = false;
  }

  else if (valueIdiomas == "" || valueIdiomas == null || valueIdiomas == undefined) {
    isValid = false;
  }

  else if (valueEmpleos == "" || valueEmpleos == null || valueEmpleos == undefined) {
    isValid = false;
  }

  else if (valueEducacion == "" || valueEducacion == null || valueEducacion == undefined) {
    isValid = false;
  }

  else if (valueHabilidades == "" || valueHabilidades == null || valueHabilidades == undefined) {
    isValid = false;
  }

  else if (valueCertificaciones == "" || valueCertificaciones == null || valueCertificaciones == undefined) {
    isValid = false;
  }

  return isValid;
}