// Download contact as vCard; optional demo-call tracking
document.addEventListener('DOMContentLoaded', function () {
  var downloadBtn = document.getElementById('download-contact');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function () {
      var vcard = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        'N:Dutta;Abhi;;;',
        'FN:Abhi Dutta',
        'ORG:Newo.ai',
        'TEL;TYPE=CELL:(972) 754-1499',
        'EMAIL:abhirup.dutta@newo.ai',
        'URL:https://newo.ai',
        'END:VCARD'
      ].join('\r\n');
      var blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'abhi-dutta.vcf';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }
});
