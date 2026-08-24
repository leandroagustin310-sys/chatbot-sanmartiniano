function quitarTildes(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function responder() {
  let inputPregunta = document.getElementById("pregunta");
    let pregunta = inputPregunta.value.toLowerCase().trim();
    pregunta = quitarTildes(pregunta);
    let respuesta = "";

  if (pregunta === "salir") {
      respuesta = "¡Gracias por haber utilizado este chatbot sanmartiniano!";
      inputPregunta.disabled = true;
      btnEnviar.disabled = true;
      document.getElementById("btnEnviar").disabled = true
      inputPregunta.classList.remove("input-activo");
      btnEnviar.classList.remove("btn-activo");
  } else if (pregunta==="") {
    respuesta = "Por favor, escribí una pregunta antes de enviar.";  
  }  else if (/quien es san martin|quien fue san martin|quien es jose de san martin|quien fue jose de san martin|quien sos|quien fuiste/.test(pregunta)) {
      respuesta = "José de San Martín fue un militar y político argentino, considerado uno de los principales Libertadores de América. Lideró el cruce de los Andes y las campañas militares que consolidaron la independencia de Argentina, Chile y Perú.";
  } else if (/nacio|nacimiento|epoca|naciste/.test(pregunta)) {
      respuesta = "José de San Martín nació el 25 de febrero de 1778 en Yapeyú, en el Virreinato del Río de la Plata.";
  } else if (/familia/.test(pregunta)) {
      respuesta = "La familia de San Martín estaba integrada por sus padres, Juan de San Martín y Gregoria Matorras del Ser. Tuvo cuatro hermanos: María Elena, Manuel Tadeo, Justo Rufino y Fermín. Se casó con María de los Remedios de Escalada y tuvieron una sola hija, Mercedes Tomasa de San Martín y Escalada.";
  } else if (/padres|papa|padre|mama|madre/.test(pregunta)) {
      respuesta = "Sus padres fueron Juan de San Martín y Gregoria Matorras del Ser.";
  } else if (/hija|hijos|hijo/.test(pregunta)) {
      respuesta = "San Martín tuvo una sola hija llamada Mercedes Tomasa de San Martín y Escalada, nacida en Mendoza el 24 de agosto de 1816, fruto de su matrimonio con María de los Remedios de Escalada. A ella le dedicó las famosas Máximas para su educación.";
  } else if (/hermano|hermanos|hermana|hermanas/.test(pregunta)) {
      respuesta = "San Martín tuvo cuatro hermanos mayores: María Elena, Manuel Tadeo, Justo Rufino y Fermín.";
  } else if (/escalada|remedios|mujer|esposa|casamiento|caso/.test(pregunta)) {
      respuesta = "Su esposa fue María de los Remedios de Escalada, con quien se casó en 1812. Fue clave para la causa patriota al promover la confección de la Bandera de los Andes y organizar la donación de joyas familiares para financiar la gesta libertadora.";
  } else if (/primeros años|niñez|infancia|criaste|crianza|crio/.test(pregunta)) {
      respuesta = "San Martín vivió sus primeros años en Yapeyú en contacto con la comunidad guaraní. En 1783 su familia se trasladó a España, residiendo en Madrid y Málaga. Cursó su formación básica en el Real Seminario de Nobles de Madrid, donde aprendió latín, francés, matemáticas, geografía, música, dibujo y equitación.";
  } else if (/estudio|estudiar|estudios|escuela|colegio|formacion|carrera|estudiaste/.test(pregunta)) {
      respuesta = "Comenzó su educación en Buenos Aires y la continuó en España en el Real Seminario de Nobles de Madrid, donde cursó matemáticas, geografía, latín, francés y dibujo. A los 11 años ingresó como cadete al Regimiento de Murcia, completando allí su rigurosa formación académica y militar.";
  } else if (/cruce de los andes|cruce|andes/.test(pregunta)) {
      respuesta = "El Cruce de los Andes fue una hazaña militar y logística iniciada en enero de 1817 para liberar Chile y Perú del dominio español. Partió desde Mendoza (El Plumerillo) y duró unos 21 días, involucrando a más de 5.400 personas (entre soldados, jefes y milicianos), además de miles de mulas y caballos.";
  } else if (/mendoza|cuyo/.test(pregunta)) {
      respuesta = "Mendoza fue la base estratégica donde San Martín organizó el Ejército de los Andes. Con el apoyo de la población local, se fabricaron armas y juntaron provisiones, convirtiendo a la ciudad en un centro clave para el Cruce de los Andes.";
  } else if (/sorpresa|estrategia|ruta/.test(pregunta)) {
      respuesta = "El ejército cruzó la cordillera por diferentes pasos para dividir al enemigo. Esta estrategia de sorpresa impidió que los realistas previeran el ataque principal, dándole a los patriotas una ventaja militar clave.";
  } else if (/guerras|guerra|combates|triunfo|triunfos/.test(pregunta)) {
      respuesta = "San Martín luchó contra Napoleón en España (destacándose en Bailén, 1808) y luego lideró la independencia sudamericana, triunfando en combates clave como San Lorenzo (1813), Chacabuco (1817) y Maipú (1818).";
  } else if (/granaderos|granadero|regimiento/.test(pregunta)) {
      respuesta = "El Regimiento de Granaderos a Caballo fue creado por San Martín en 1812 con el objetivo de contar con soldados muy bien entrenados para defender el territorio y enfrentar al ejército realista. Recibían una preparación exigente y debían cumplir con estrictas normas de disciplina.";
  } else if (/san lorenzo|combate|combate de san lorenzo|batalla de san lorenzo/.test(pregunta)) {
      respuesta = "El Combate de San Lorenzo ocurrió el 3 de febrero de 1813 en el convento de San Carlos, en San Lorenzo, Santa Fe. Fue el bautismo de fuego de los Granaderos a Caballo, quienes en un combate de solo 15 minutos emboscaron y derrotaron a los realistas, asegurando el control del río Paraná.";
  } else if (/chile/.test(pregunta)) {
      respuesta = "Después de cruzar la Cordillera de los Andes, el Ejército de los Andes enfrentó a las tropas realistas en distintas batallas. La victoria en Chacabuco, en 1817, permitió ocupar Santiago. Más tarde, el triunfo en Maipú, en 1818, aseguró definitivamente la independencia de Chile.";
  } else if (/peru/.test(pregunta)) {
      respuesta = "San Martín organizó una expedición por mar desde Chile para llegar a la costa peruana. En 1820 desembarcó con sus tropas y avanzó mediante acuerdos, acciones militares y el apoyo de muchos habitantes. En 1821 ingresó a Lima y proclamó la independencia del Perú. Sin embargo, todavía quedaban fuerzas españolas en otras regiones del territorio.";
  } else if (/chacabuco/.test(pregunta)) {
      respuesta = "La Batalla de Chacabuco ocurrió el 12 de febrero de 1817 en la hacienda de Chacabuco, Chile. Luego de cruzar los Andes, el Ejército patriota liderado por San Martín ejecutó un ataque en pinza que derrotó a las fuerzas realistas, logrando recuperar la ciudad de Santiago y abrir el camino a la independencia de Chile.";
  } else if (/maipu/.test(pregunta)) {
      respuesta = "La Batalla de Maipú ocurrió el 5 de abril de 1818 en los llanos del Maipo, cerca de Santiago de Chile. Fue el triunfo más decisivo del Ejército de los Andes, donde San Martín derrotó definitivamente al ejército realista, asegurando la independencia absoluta de Chile y permitiendo planificar la campaña hacia el Perú.";
  } else if (/bolivar/.test(pregunta)) {
      respuesta = "San Martín y Bolívar se respetaban como los grandes libertadores de América, pero se vieron solo una vez en la Entrevista de Guayaquil (1822) y nunca lucharon juntos. Al no acordar sobre la guerra y el gobierno del Perú, San Martín cedió el mando a Bolívar para no dividir fuerzas.";
  } else if (/campana libertadora/.test(pregunta)) {
      respuesta = "La Campaña Libertadora fue el plan militar continental diseñado por San Martín para asegurar la independencia de Sudamérica. Consistió en cruzar la Cordillera de los Andes, liberar Chile (batallas de Chacabuco y Maipú) y avanzar por mar hacia el Perú para derrotar el centro del poder realista en Lima.";
  } else if (/legado|valores|enseñanza|impacto|aporte/.test(pregunta)) {
      respuesta = "El principal legado de San Martín fue liderar las gestas libertadoras de Argentina, Chile y Perú, fundamentales para emancipar a Sudamérica del dominio español. Estudiar su historia permite comprender los desafíos de esa época y valorar el esfuerzo por la libertad, fortaleciendo la memoria colectiva e invitando a reflexionar sobre la importancia del compromiso ciudadano.";
  } else if (/emblema|figura emblematica|heroe|procer/.test(pregunta)) {
      respuesta = "José de San Martín es considerado un prócer porque dedicó gran parte de su vida a luchar por la libertad de su pueblo y de otros países vecinos. Actuó con valentía, esfuerzo y compromiso, poniendo el bienestar de la sociedad por encima de sus intereses personales. Su ejemplo inspira valores como el respeto, la responsabilidad y el amor por la patria.";
  } else if (/recuerdo|recuerda|recuerdan|honra|homenajea|recordamos|homenaje/.test(pregunta)) {
      respuesta = "En la Argentina, José de San Martín es recordado mediante monumentos, plazas, calles, escuelas y museos que llevan su nombre. Cada 17 de agosto se realizan actos escolares y homenajes para recordar el aniversario de su fallecimiento. Estas actividades ayudan a mantener viva su memoria y a conocer su aporte a la independencia.";
  } else if (/murio|muerte|moriste|fallecio|falleciste|fallecimiento/.test(pregunta)) {
      respuesta = "Murió el 17 de agosto de 1850 en Boulogne-sur-Mer, Francia, a causa de complicaciones de salud asociadas a su avanzada edad y males crónicos (asma y problemas digestivos), sufriendo un ataque cardíaco fatal.";
  } else if (/restos|sepultura|sepultaron|sepultados|sepultado|enterrados|enterrado|cadaver|cuerpo/.test(pregunta)) {
      respuesta = "En un principio, sus restos fueron sepultados en Francia, cumpliendo con sus deseos de descansar en paz. Sin embargo, varias décadas más tarde, en 1880, fueron repatriados a la Argentina y hoy descansan en un mausoleo ubicado dentro de la Catedral Metropolitana de Buenos Aires.";
  } else {
      respuesta = "Lo siento, todavía no conozco la respuesta a esa pregunta. <b>Intentá preguntarme de otra forma.</b> O podés consultar sobre su nacimiento, su familia, los Granaderos, sus estudios, San Lorenzo, Mendoza, la Campaña Libertadora, el Cruce de los Andes, Chacabuco, Maipú, Bolívar, su legado o su muerte.";
  }


  let chat = document.getElementById("respuesta");
  chat.innerHTML += "<div class='usuario'><strong>👤 Vos:</strong> " + pregunta + "</div>";
  chat.scrollTop = chat.scrollHeight;

 
  document.getElementById("pregunta").value = "";

 
  setTimeout(function() {
      chat.innerHTML += "<div class='bot'><span class='cruzia'>🤖 CruzIA:</span> " + respuesta + "</div><hr>";
      chat.scrollTop = chat.scrollHeight;
  }, 300); 
}
