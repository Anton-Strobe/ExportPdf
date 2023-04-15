$(document).ready(function () {
    function initExportPdfButton() {
      if ($('#exportPdfButton').length > 0) return;
      var button = $('<a href="#" id="exportPdfButton" class="btn btn-info">Экспорт в PDF</a>');
      button.on('click', function (event) {
        event.preventDefault();
        exportToPdf();
      });
      $('.top_controls').append(button);
    }
  
    function exportToPdf() {
      const element1 = document.querySelector("#secondNavBar");
      const element2 = document.querySelector("#root > div.top_controls");
      const element3 = document.querySelector("#root > nav");
  
      if (element1) element1.style.display = "none";
      if (element2) element2.style.display = "none";
      if (element3) element3.style.display = "none";
  
      window.print();
      setTimeout(function () {
        var printWindow = window.frames["print-frame"];
        printWindow.document.execCommand('print', false, null);
        printWindow.document.execCommand('SaveAs', true, 'page_export.pdf');
  
        
      }, 10000);
      // Перезагружаем страницу
    location.reload();
    }
  
    initExportPdfButton();
    
  });
  