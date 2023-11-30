var wms_layers = [];

var format_FIXEDPENGGUNAANLAHAN_0 = new ol.format.GeoJSON();
var features_FIXEDPENGGUNAANLAHAN_0 = format_FIXEDPENGGUNAANLAHAN_0.readFeatures(json_FIXEDPENGGUNAANLAHAN_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FIXEDPENGGUNAANLAHAN_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FIXEDPENGGUNAANLAHAN_0.addFeatures(features_FIXEDPENGGUNAANLAHAN_0);
var lyr_FIXEDPENGGUNAANLAHAN_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FIXEDPENGGUNAANLAHAN_0, 
                style: style_FIXEDPENGGUNAANLAHAN_0,
                interactive: true,
    title: 'FIXED PENGGUNAAN LAHAN<br />\
    <img src="styles/legend/FIXEDPENGGUNAANLAHAN_0_0.png" /> Badan Air<br />\
    <img src="styles/legend/FIXEDPENGGUNAANLAHAN_0_1.png" /> Belukar<br />\
    <img src="styles/legend/FIXEDPENGGUNAANLAHAN_0_2.png" /> Hutan Lahan Kering Primer<br />\
    <img src="styles/legend/FIXEDPENGGUNAANLAHAN_0_3.png" /> Hutan Lahan Kering Sekunder<br />\
    <img src="styles/legend/FIXEDPENGGUNAANLAHAN_0_4.png" /> Hutan Tanaman<br />\
    <img src="styles/legend/FIXEDPENGGUNAANLAHAN_0_5.png" /> Pemukiman<br />\
    <img src="styles/legend/FIXEDPENGGUNAANLAHAN_0_6.png" /> Perkebunan<br />\
    <img src="styles/legend/FIXEDPENGGUNAANLAHAN_0_7.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/FIXEDPENGGUNAANLAHAN_0_8.png" /> Pertanian Lahan Kering Campur<br />\
    <img src="styles/legend/FIXEDPENGGUNAANLAHAN_0_9.png" /> Sawah<br />\
    <img src="styles/legend/FIXEDPENGGUNAANLAHAN_0_10.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/FIXEDPENGGUNAANLAHAN_0_11.png" /> <br />'
        });
var format_FIXEDDAS_1 = new ol.format.GeoJSON();
var features_FIXEDDAS_1 = format_FIXEDDAS_1.readFeatures(json_FIXEDDAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FIXEDDAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FIXEDDAS_1.addFeatures(features_FIXEDDAS_1);
var lyr_FIXEDDAS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FIXEDDAS_1, 
                style: style_FIXEDDAS_1,
                interactive: true,
                title: '<img src="styles/legend/FIXEDDAS_1.png" /> FIXED DAS'
            });

lyr_FIXEDPENGGUNAANLAHAN_0.setVisible(true);lyr_FIXEDDAS_1.setVisible(true);
var layersList = [lyr_FIXEDPENGGUNAANLAHAN_0,lyr_FIXEDDAS_1];
lyr_FIXEDPENGGUNAANLAHAN_0.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAME': 'NAME', 'Provinsi': 'Provinsi', 'PL_19_R': 'PL_19_R', 'Legenda': 'Legenda', });
lyr_FIXEDDAS_1.set('fieldAliases', {'objectid_1': 'objectid_1', 'objectid': 'objectid', 'kode_prov': 'kode_prov', 'nama_das': 'nama_das', 'luas_ha': 'luas_ha', 'kel_m': 'kel_m', 'prioritas_': 'prioritas_', 'kd_tematik': 'kd_tematik', 'kd_region': 'kd_region', 'kd_lintas': 'kd_lintas', 'kd_das': 'kd_das', 'wil_kerja': 'wil_kerja', 'kd_urutdas': 'kd_urutdas', 'globalid': 'globalid', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'st_area(sh': 'st_area(sh', 'st_length(': 'st_length(', });
lyr_FIXEDPENGGUNAANLAHAN_0.set('fieldImages', {'OBJECTID_1': 'Range', 'NAME': 'TextEdit', 'Provinsi': 'TextEdit', 'PL_19_R': 'Range', 'Legenda': 'TextEdit', });
lyr_FIXEDDAS_1.set('fieldImages', {'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'kode_prov': 'TextEdit', 'nama_das': 'TextEdit', 'luas_ha': 'TextEdit', 'kel_m': 'TextEdit', 'prioritas_': 'TextEdit', 'kd_tematik': 'TextEdit', 'kd_region': 'TextEdit', 'kd_lintas': 'TextEdit', 'kd_das': 'TextEdit', 'wil_kerja': 'TextEdit', 'kd_urutdas': 'TextEdit', 'globalid': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_length(': 'TextEdit', });
lyr_FIXEDPENGGUNAANLAHAN_0.set('fieldLabels', {'OBJECTID_1': 'no label', 'NAME': 'no label', 'Provinsi': 'no label', 'PL_19_R': 'no label', 'Legenda': 'no label', });
lyr_FIXEDDAS_1.set('fieldLabels', {'objectid_1': 'no label', 'objectid': 'no label', 'kode_prov': 'no label', 'nama_das': 'no label', 'luas_ha': 'no label', 'kel_m': 'no label', 'prioritas_': 'no label', 'kd_tematik': 'no label', 'kd_region': 'no label', 'kd_lintas': 'no label', 'kd_das': 'no label', 'wil_kerja': 'no label', 'kd_urutdas': 'no label', 'globalid': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', 'st_area(sh': 'no label', 'st_length(': 'no label', });
lyr_FIXEDDAS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});