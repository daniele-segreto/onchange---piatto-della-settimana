function cambiaGiorno(giorni) {
    // alert('funziona');
    var result = document.getElementById('result');

    switch (giorni.value) {
        case '1':
            result.innerHTML = `
                <div class="card h-100">
                    <img src="${lunedi.img}" class="card-img-top" alt="${lunedi.alt}">
                    <div class="card-body">
                        <h5 class="card-title">${lunedi.piatto}</h5>
                        <p class="card-text"><strong>Ingredienti:</strong> ${lunedi.ingredienti}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">${lunedi.footer}</small>
                    </div>
                </div>
            `
        break;

        case '2':
            result.innerHTML = `
                <div class="card h-100">
                    <img src="${martedi.img}" class="card-img-top" alt="${martedi.alt}">
                    <div class="card-body">
                        <h5 class="card-title">${martedi.piatto}</h5>
                        <p class="card-text"><strong>Ingredienti:</strong> ${martedi.ingredienti}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">${martedi.footer}</small>
                    </div>
                </div>
            `
        break;

        case '3':
            result.innerHTML = `
                <div class="card h-100">
                    <img src="${mercoledi.img}" class="card-img-top" alt="${mercoledi.alt}">
                    <div class="card-body">
                        <h5 class="card-title">${mercoledi.piatto}</h5>
                        <p class="card-text"><strong>Ingredienti:</strong> ${mercoledi.ingredienti}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">${mercoledi.footer}</small>
                    </div>
                </div>
            `
        break;

        case '4':
            result.innerHTML = `
                <div class="card h-100">
                    <img src="${giovedi.img}" class="card-img-top" alt="${giovedi.alt}">
                    <div class="card-body">
                        <h5 class="card-title">${giovedi.piatto}</h5>
                        <p class="card-text"><strong>Ingredienti:</strong> ${giovedi.ingredienti}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">${giovedi.footer}</small>
                    </div>
                </div>
            `
        break;

        case '5':
            result.innerHTML = `
                <div class="card h-100">
                    <img src="${venerdi.img}" class="card-img-top" alt="${venerdi.alt}">
                    <div class="card-body">
                        <h5 class="card-title">${venerdi.piatto}</h5>
                        <p class="card-text"><strong>Ingredienti:</strong> ${venerdi.ingredienti}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">${venerdi.footer}</small>
                    </div>
                </div>
            `
        break;

        case '6':
            result.innerHTML = `
                <div class="card h-100">
                    <img src="${sabato.img}" class="card-img-top" alt="${sabato.alt}">
                    <div class="card-body">
                        <h5 class="card-title">${sabato.piatto}</h5>
                        <p class="card-text"><strong>Ingredienti:</strong> ${sabato.ingredienti}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">${sabato.footer}</small>
                    </div>
                </div>
            `
        break;

        case '7':
            result.innerHTML = `
                <div class="card h-100">
                    <img src="${domenica.img}" class="card-img-top" alt="${domenica.alt}">
                    <div class="card-body">
                        <h5 class="card-title">${domenica.piatto}</h5>
                        <p class="card-text"><strong>Ingredienti:</strong> ${domenica.ingredienti}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">${domenica.footer}</small>
                    </div>
                </div>
            `
        break;
        
        default:
            result.innerHTML = `
                <div class="alert alert-warning" role="alert">
                    Seleziona un giorno della settimana per visualizzare il tuo piatto!
                </div>
            `
        break;
    }

}

// $(document).ready(function () {

//     cambiaGiorno = function(option) {

//         // LUNEDI'
//         if ($(option).val() == 1) {
//             $('#result').html(`
//                 <div class="card h-100">
//                     <img src="${lunedi.img}" class="card-img-top" alt="${lunedi.alt}">
//                     <div class="card-body">
//                         <h5 class="card-title">${lunedi.piatto}</h5>
//                         <p class="card-text"><strong>Ingredienti:</strong> ${lunedi.ingredienti}</p>
//                     </div>
//                     <div class="card-footer">
//                         <small class="text-body-secondary">${lunedi.footer}</small>
//                     </div>
//                 </div>
//             `);
//         }
//         // MARTEDI'
//         else if ($(option).val() == 2){
//             $('#result').html(`
//                 <div class="card h-100">
//                     <img src="${martedi.img}" class="card-img-top" alt="${martedi.alt}">
//                     <div class="card-body">
//                         <h5 class="card-title">${martedi.piatto}</h5>
//                         <p class="card-text"><strong>Ingredienti:</strong> ${martedi.ingredienti}</p>
//                     </div>
//                     <div class="card-footer">
//                         <small class="text-body-secondary">${martedi.footer}</small>
//                     </div>
//                 </div>
//             `);
//         }
//         // MERCOLEDI'
//         else if ($(option).val() == 3){
//             $('#result').html(`
//                 <div class="card h-100">
//                     <img src="${mercoledi.img}" class="card-img-top" alt="${mercoledi.alt}">
//                     <div class="card-body">
//                         <h5 class="card-title">${mercoledi.piatto}</h5>
//                         <p class="card-text"><strong>Ingredienti:</strong> ${mercoledi.ingredienti}</p>
//                     </div>
//                     <div class="card-footer">
//                         <small class="text-body-secondary">${mercoledi.footer}</small>
//                     </div>
//                 </div>
//         `);
//         }
//         // GIOVEDI'
//         else if ($(option).val() == 4){
//             $('#result').html(`
//                 <div class="card h-100">
//                     <img src="${giovedi.img}" class="card-img-top" alt="${giovedi.alt}">
//                     <div class="card-body">
//                         <h5 class="card-title">${giovedi.piatto}</h5>
//                         <p class="card-text"><strong>Ingredienti:</strong> ${giovedi.ingredienti}</p>
//                     </div>
//                     <div class="card-footer">
//                         <small class="text-body-secondary">${giovedi.footer}</small>
//                     </div>
//                 </div>
//             `);
//         }
//         // VENERDI'
//         else if ($(option).val() == 5){
//             $('#result').html(`
//                 <div class="card h-100">
//                     <img src="${venerdi.img}" class="card-img-top" alt="${venerdi.alt}">
//                     <div class="card-body">
//                         <h5 class="card-title">${venerdi.piatto}</h5>
//                         <p class="card-text"><strong>Ingredienti:</strong> ${venerdi.ingredienti}</p>
//                     </div>
//                     <div class="card-footer">
//                         <small class="text-body-secondary">${venerdi.footer}</small>
//                     </div>
//                 </div>
//             `);
//         }
//         // SABATO
//         else if ($(option).val() == 6){
//             $('#result').html(`
//                 <div class="card h-100">
//                     <img src="${sabato.img}" class="card-img-top" alt="${sabato.alt}">
//                     <div class="card-body">
//                         <h5 class="card-title">${sabato.piatto}</h5>
//                         <p class="card-text"><strong>Ingredienti:</strong> ${sabato.ingredienti}</p>
//                     </div>
//                     <div class="card-footer">
//                         <small class="text-body-secondary">${sabato.footer}</small>
//                     </div>
//                 </div>
//             `);
//         }
//         // DOMENICA
//         else if ($(option).val() == 7){
//             $('#result').html(`
//                 <div class="card h-100">
//                     <img src="${domenica.img}" class="card-img-top" alt="${domenica.alt}">
//                     <div class="card-body">
//                         <h5 class="card-title">${domenica.piatto}</h5>
//                         <p class="card-text"><strong>Ingredienti:</strong> ${domenica.ingredienti}</p>
//                     </div>
//                     <div class="card-footer">
//                         <small class="text-body-secondary">${domenica.footer}</small>
//                     </div>
//                 </div>
//         `);
//         }
//         // ERRORE
//         else {
//             $('#result').html(`
//                 <div class="alert alert-warning" role="alert">
//                     Seleziona un giorno della settimana per visualizzare il tuo piatto!
//                 </div>
//             `);
//         }
//     }


// });