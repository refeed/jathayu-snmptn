
const DATA_COLLECTED = 106;
const DATA_EXPECTED = 106;
var dataPercentage = (DATA_COLLECTED/DATA_EXPECTED) * 100;

$(document).ready(function () {
    $('#MIA-table').DataTable({
        "ajax": "data/MIA.json"
    });

    $('.progress-bar').css('width', dataPercentage + '%').attr('aria-valuenow', dataPercentage);
    $('.progress-bar').text(`Data terkumpul ${DATA_COLLECTED} dari ${DATA_EXPECTED}`);
    $('#lastUpdate').text('Last checked: Thursday,  7 Feb 2019 12:01:45 (WIB)');
    $('#downloadURL').html('Data beserta nilai bisa diunduh di <a href="data/jathayu-mia-rank.csv">sini</a> (MIA)');
});
