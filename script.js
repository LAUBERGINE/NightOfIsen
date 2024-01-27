// Données JSON
const absencesData = [
    {},
    {
      "Date": "08/11/23",
      "Reason": "Absence excusée",
      "Duration": "4:00",
      "Hours": "13:00 - 17:00",
      "Course": "Semestre 1 - Candidature professionnelle",
      "Teachers": ["Marion GOURLAOUEN"],
      "Subject": "Recrutement_CV-LM"
    },
    {
      "Date": "08/11/23",
      "Reason": "Absence excusée",
      "Duration": "4:00",
      "Hours": "08:00 - 12:00",
      "Course": "Semestre 1 - Architecture des ordinateurs",
      "Teachers": ["Gaël BALDUINI"],
      "Subject": "Architecture"
    },
    {
      "Date": "08/11/23",
      "Reason": "Absence excusée",
      "Duration": "4:00",
      "Hours": "08:00 - 12:00",
      "Course": "Semestre 1 - Architecture des ordinateurs",
      "Teachers": ["Gaël BALDUINI"],
      "Subject": "Architecture"
    },
    {
      "Date": "08/11/23",
      "Reason": "Absence excusée",
      "Duration": "4:00",
      "Hours": "08:00 - 12:00",
      "Course": "Semestre 1 - Architecture des ordinateurs",
      "Teachers": ["Gaël BALDUINI"],
      "Subject": "Architecture"
    },
    {
      "Date": "08/11/23",
      "Reason": "Absence excusée",
      "Duration": "4:00",
      "Hours": "08:00 - 12:00",
      "Course": "Semestre 1 - Architecture des ordinateurs",
      "Teachers": ["Gaël BALDUINI"],
      "Subject": "Architecture"
    },
    {
      "Date": "08/11/23",
      "Reason": "Absence excusée",
      "Duration": "4:00",
      "Hours": "08:00 - 12:00",
      "Course": "Semestre 1 - Architecture des ordinateurs",
      "Teachers": ["Gaël BALDUINI"],
      "Subject": "Architecture"
    },
    {
      "Date": "08/11/23",
      "Reason": "Absence excusée",
      "Duration": "4:00",
      "Hours": "08:00 - 12:00",
      "Course": "Semestre 1 - Architecture des ordinateurs",
      "Teachers": ["Gaël BALDUINI"],
      "Subject": "Architecture"
    }

  ];
  

  function createAbsenceTable(data) {
    const tableContainer = document.getElementById('absenceTableContainer');
  
   
    const table = document.createElement('table');
    table.id = 'form:dataTableFavori';
    table.classList.add('alignTable');
  
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    for (const key in data[1]) {
      const th = document.createElement('th');
      th.textContent = key;
      headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);
  

    const tbody = document.createElement('tbody');
    data.forEach(item => {
      const row = document.createElement('tr');
      for (const key in item) {
        const cell = document.createElement('td');
        cell.textContent = item[key];
        row.appendChild(cell);
      }
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
  
    tableContainer.appendChild(table);
  }
  
  createAbsenceTable(absencesData);


  
  