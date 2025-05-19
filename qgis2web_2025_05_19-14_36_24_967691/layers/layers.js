ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([107.521630, -6.908239, 107.588691, -6.862532]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Qgis_Plott_PusatPendidikan_1 = new ol.format.GeoJSON();
var features_Qgis_Plott_PusatPendidikan_1 = format_Qgis_Plott_PusatPendidikan_1.readFeatures(json_Qgis_Plott_PusatPendidikan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Qgis_Plott_PusatPendidikan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Qgis_Plott_PusatPendidikan_1.addFeatures(features_Qgis_Plott_PusatPendidikan_1);
var lyr_Qgis_Plott_PusatPendidikan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Qgis_Plott_PusatPendidikan_1, 
                style: style_Qgis_Plott_PusatPendidikan_1,
                popuplayertitle: 'Qgis_Plott_Pusat-Pendidikan',
                interactive: true,
    title: 'Qgis_Plott_Pusat-Pendidikan<br />\
    <img src="styles/legend/Qgis_Plott_PusatPendidikan_1_0.png" /> Pusat Pendidikan Perhubangan<br />\
    <img src="styles/legend/Qgis_Plott_PusatPendidikan_1_1.png" /> Pusat Pendidikan Jasmani Militer<br />\
    <img src="styles/legend/Qgis_Plott_PusatPendidikan_1_2.png" /> Pusat Pendidikan Pembekalan Angkatan <br />\
    <img src="styles/legend/Qgis_Plott_PusatPendidikan_1_3.png" /> Pusat Pnedidikan Peralatan <br />\
    <img src="styles/legend/Qgis_Plott_PusatPendidikan_1_4.png" /> Pusat Penddikan Polisi Militer<br />\
    <img src="styles/legend/Qgis_Plott_PusatPendidikan_1_5.png" /> Pusat Pendidikan Pembekalan Angkatan<br />\
    <img src="styles/legend/Qgis_Plott_PusatPendidikan_1_6.png" /> Pusat Pnedidikan Peralatan<br />\
    <img src="styles/legend/Qgis_Plott_PusatPendidikan_1_7.png" /> <br />' });
var format_KotaCimahiqgis_plott_pusatpendidikan_2 = new ol.format.GeoJSON();
var features_KotaCimahiqgis_plott_pusatpendidikan_2 = format_KotaCimahiqgis_plott_pusatpendidikan_2.readFeatures(json_KotaCimahiqgis_plott_pusatpendidikan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KotaCimahiqgis_plott_pusatpendidikan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaCimahiqgis_plott_pusatpendidikan_2.addFeatures(features_KotaCimahiqgis_plott_pusatpendidikan_2);
var lyr_KotaCimahiqgis_plott_pusatpendidikan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaCimahiqgis_plott_pusatpendidikan_2, 
                style: style_KotaCimahiqgis_plott_pusatpendidikan_2,
                popuplayertitle: 'Kota Cimahi — qgis_plott_pusatpendidikan',
                interactive: true,
                title: '<img src="styles/legend/KotaCimahiqgis_plott_pusatpendidikan_2.png" /> Kota Cimahi — qgis_plott_pusatpendidikan'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Qgis_Plott_PusatPendidikan_1.setVisible(true);lyr_KotaCimahiqgis_plott_pusatpendidikan_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Qgis_Plott_PusatPendidikan_1,lyr_KotaCimahiqgis_plott_pusatpendidikan_2];
lyr_Qgis_Plott_PusatPendidikan_1.set('fieldAliases', {'Nama': 'Nama', 'X': 'X', 'Y': 'Y', 'Deskripsi': 'Deskripsi', 'Gambar_URL': 'Gambar_URL', });
lyr_KotaCimahiqgis_plott_pusatpendidikan_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'X': 'X', 'Y': 'Y', 'Deskripsi': 'Deskripsi', 'Gambar_URL': 'Gambar_URL', });
lyr_Qgis_Plott_PusatPendidikan_1.set('fieldImages', {'Nama': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Deskripsi': 'TextEdit', 'Gambar_URL': 'TextEdit', });
lyr_KotaCimahiqgis_plott_pusatpendidikan_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Deskripsi': 'TextEdit', 'Gambar_URL': 'TextEdit', });
lyr_Qgis_Plott_PusatPendidikan_1.set('fieldLabels', {'Nama': 'header label - always visible', 'X': 'inline label - visible with data', 'Y': 'header label - visible with data', 'Deskripsi': 'header label - always visible', 'Gambar_URL': 'inline label - visible with data', });
lyr_KotaCimahiqgis_plott_pusatpendidikan_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'Nama': 'header label - always visible', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Deskripsi': 'header label - always visible', 'Gambar_URL': 'header label - visible with data', });
lyr_KotaCimahiqgis_plott_pusatpendidikan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});