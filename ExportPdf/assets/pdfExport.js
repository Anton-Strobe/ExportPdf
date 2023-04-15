function exportToPdf() {
    try {
        window.print();
        setTimeout(function () {
            var printWindow = window.frames["print-frame"];
            printWindow.document.execCommand('print', false, null);
            printWindow.document.execCommand('SaveAs', true, 'page_export.pdf');
        }, 1000);
    } catch (error) {
        console.error("Ошибка экспорта в PDF:", error);
    }
}
