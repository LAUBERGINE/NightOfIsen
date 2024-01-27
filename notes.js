document.addEventListener('DOMContentLoaded', function () {
    const notesData = [
        
            {
              "date": "26/01/2024",
              "code": "23_CYBER_ARCHIOS_DS_250124",
              "name": "DS1 (2h) Architecture des OS",
              "note": "14.80",
              "teachers": [
                "GAULMIN Julien",
                " TAMAYO Jean-Marc",
                " VERRIEST Angélique"
              ]
            },
            {
              "date": "23/01/2024",
              "code": "23_CYBER_ANGLAIS_CC_S1",
              "name": "Anglais Contrôle Continu Semestre 1",
              "note": "14.67",
              "teachers": [
                "GEORGE Gary",
                " ARTHEY Caroline",
                " CALAMIA Pauline",
                " COX Christopher",
                " TAMAYO Jean-Marc"
              ]
            },
            {
              "date": "19/01/2024",
              "code": "23_CYBER_ANGLAIS_EX_190124",
              "name": "Examen anglais semestre 1",
              "note": "5.34",
              "teachers": [
                "RIVERS Natalie",
                " ARTHEY Caroline",
                " CALAMIA Pauline",
                " COX Christopher",
                " JOLY Laura",
                " TAMAYO Jean-Marc",
                " GEORGE Gary",
                " D'AMORE Georges",
                " VERRIEST Angélique",
                " OLIVIER Lolita"
              ]
            },
            {
              "date": "19/12/2023",
              "code": "23_CYBER_GITHUB_DS_191223",
              "name": "DS1 (30min) Github",
              "note": "15.50",
              "teachers": [
                "TAMAYO Jean-Marc",
                " LOMBARDO Aurélien",
                " LLOYD Benoit"
              ]
            },
            {
              "date": "15/12/2023",
              "code": "23_CYBER_ALGEBRE_DS_151223",
              "name": "DS1 (2h) d'algèbre",
              "note": "6.00",
              "teachers": [
                "TAMAYO Jean-Marc",
                " SURVEILLANTE X1_Inconnue",
                " KHODER Wassim"
              ]
            },
            {
              "date": "08/12/2023",
              "code": "23_CYBER_LINUX_DS_241123",
              "name": "DS1 (2h) de Linux",
              "note": "14.50",
              "teachers": [
                "TAMAYO Jean-Marc",
                " HENNUY Antoine",
                " D'AMORE Georges"
              ]
            },
            {
              "date": "14/11/2023",
              "code": "23_CYBER_ELECTRO1_DS_141123",
              "name": "DS1 (2h) électronique",
              "note": "13.00",
              "comments": "Bon travail",
              "teachers": [
                "RINUIT Frédéric",
                " REYMOND Olivier",
                " TAMAYO Jean-Marc"
              ]
            },
            {
              "date": "28/09/2023",
              "code": "23_ISEN_TLN_CIN1_S1_OUTILS_MATHS_DS_1",
              "name": "Semestre 1 - Outils mathématiques - Devoir - 1",
              "note": "3.50",
              "teachers": [
                "MARIE Philippe",
                " TAMAYO Jean-Marc",
                " GOLAY Sylvie"
              ]
            }
          
          
    ];
  
    const notesList = document.getElementById('notesList');
    const moyenneGenerale = document.getElementById('moyenneGenerale');
  
    function getColorForNote(note) {
      if (note >= 15 && note <= 20) {
        return "#1DFF00";
      } else if (note >= 10 && note < 15) {
        return "#47C589";
      } else if (note >= 5 && note < 10) {
        return "#FFD500";
      }else{
        return "#FF0000";
      }
    }
  
    function generateNotes() {
      let totalNotes = 0;
      let totalCredits = 0;
  
      notesData.forEach((note) => {
        const noteItem = document.createElement('li');
        noteItem.classList.add('note-item');
  
        const color = getColorForNote(parseFloat(note.note));
        noteItem.style.backgroundColor = color;
  
        noteItem.innerHTML = `
          <strong>${note.name}</strong> - ${note.note}
          <br>
          Enseignants: ${note.teachers.join(', ')}
          <br>
          Date: ${note.date}
        `;
        notesList.appendChild(noteItem);
  
        totalNotes += parseFloat(note.note);
        totalCredits++;
      });
  
      const moyenne = totalNotes / totalCredits;
      moyenneGenerale.textContent = moyenne.toFixed(2);
  
      const colorForMoyenne = getColorForNote(moyenne);
      moyenneGenerale.style.backgroundColor = colorForMoyenne;
    }
  
    generateNotes();
  });
  