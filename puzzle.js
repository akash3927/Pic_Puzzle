var number_mvs=0;

function start_game(){
    var tab_position = new Array();
    while(tab_position.length<9){
        var numero = Math.round(Math.random()*100);
        if((numero==11)||(numero==12)||(numero==13)||(numero==21)||(numero==22)||(numero==23)||(numero==31)||(numero==32)||(numero==33)){
            if(!tab_position.includes(numero)){
                tab_position[tab_position.length] = numero;

            }
        }
    }
    document.getElementById('p11').textContent = tab_position[0];
    document.getElementById('p11').style.background = 'url('+tab_position[0]+'.png)';

    document.getElementById('p12').textContent = tab_position[1];
    document.getElementById('p12').style.background = 'url('+tab_position[1]+'.png)';
    
    document.getElementById('p13').textContent = tab_position[2];
    document.getElementById('p13').style.background = 'url('+tab_position[2]+'.png)';

    document.getElementById('p21').textContent = tab_position[3];
    document.getElementById('p21').style.background = 'url('+tab_position[3]+'.png)';

    document.getElementById('p22').textContent = tab_position[4];
    document.getElementById('p22').style.background = 'url('+tab_position[4]+'.png)';

    document.getElementById('p23').textContent = tab_position[5];
    document.getElementById('p23').style.background = 'url('+tab_position[5]+'.png)';

    document.getElementById('p31').textContent = tab_position[6];
    document.getElementById('p31').style.background = 'url('+tab_position[6]+'.png)';

    document.getElementById('p32').textContent = tab_position[7];
    document.getElementById('p32').style.background = 'url('+tab_position[7]+'.png)';

    document.getElementById('p33').textContent = tab_position[8];
    document.getElementById('p33').style.background = 'url('+tab_position[8]+'.png)';

    document.getElementById('move').textContent = "Move: 0";
    number_mvs = 0;
}
//switching program
function switching(cell){
    if(document.getElementById(cell).textContent != '11'){
        switch (cell) {
            case 'p11':
                    if(document.getElementById('p12').textContent == '11'){
                        var temp_val = document.getElementById('p12').textContent;
                        document.getElementById('p12').textContent = document.getElementById('p11').textContent;
                        document.getElementById('p11').textContent = temp_val;

                        document.getElementById('p11').style.background = 'url('+document.getElementById('p11').textContent+'.png)';
                        document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    if(document.getElementById('p21').textContent == '11'){
                        var temp_val = document.getElementById('p21').textContent;
                        document.getElementById('p21').textContent = document.getElementById('p11').textContent;
                        document.getElementById('p11').textContent = temp_val;

                        document.getElementById('p11').style.background = 'url('+document.getElementById('p11').textContent+'.png)';
                        document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                break;

            case 'p12':
                    if(document.getElementById('p11').textContent == '11'){
                        var temp_val = document.getElementById('p11').textContent;
                        document.getElementById('p11').textContent = document.getElementById('p12').textContent;
                        document.getElementById('p12').textContent = temp_val;

                        document.getElementById('p11').style.background = 'url('+document.getElementById('p11').textContent+'.png)';
                        document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    if(document.getElementById('p22').textContent == '11'){
                        var temp_val = document.getElementById('p22').textContent;
                        document.getElementById('p22').textContent = document.getElementById('p12').textContent;
                        document.getElementById('p12').textContent = temp_val;

                        document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                        document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    if(document.getElementById('p13').textContent == '11'){
                        var temp_val = document.getElementById('p13').textContent;
                        document.getElementById('p13').textContent = document.getElementById('p12').textContent;
                        document.getElementById('p12').textContent = temp_val;

                        document.getElementById('p13').style.background = 'url('+document.getElementById('p13').textContent+'.png)';
                        document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    break;
            
            case 'p13':
                    if(document.getElementById('p12').textContent == '11'){
                        var temp_val = document.getElementById('p12').textContent;
                        document.getElementById('p12').textContent = document.getElementById('p13').textContent;
                        document.getElementById('p13').textContent = temp_val;

                        document.getElementById('p13').style.background = 'url('+document.getElementById('p13').textContent+'.png)';
                        document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    if(document.getElementById('p23').textContent == '11'){
                        var temp_val = document.getElementById('p23').textContent;
                        document.getElementById('p23').textContent = document.getElementById('p13').textContent;
                        document.getElementById('p13').textContent = temp_val;

                        document.getElementById('p13').style.background = 'url('+document.getElementById('p13').textContent+'.png)';
                        document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    
                    break;
      
            case 'p21':
                    if(document.getElementById('p11').textContent == '11'){
                        var temp_val = document.getElementById('p11').textContent;
                        document.getElementById('p11').textContent = document.getElementById('p21').textContent;
                        document.getElementById('p21').textContent = temp_val;

                        document.getElementById('p11').style.background = 'url('+document.getElementById('p11').textContent+'.png)';
                        document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    if(document.getElementById('p22').textContent == '11'){
                        var temp_val = document.getElementById('p22').textContent;
                        document.getElementById('p22').textContent = document.getElementById('p21').textContent;
                        document.getElementById('p21').textContent = temp_val;

                        document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                        document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    if(document.getElementById('p31').textContent == '11'){
                        var temp_val = document.getElementById('p31').textContent;
                        document.getElementById('p31').textContent = document.getElementById('p21').textContent;
                        document.getElementById('p21').textContent = temp_val;

                        document.getElementById('p31').style.background = 'url('+document.getElementById('p31').textContent+'.png)';
                        document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    break;
    
            case 'p22':
                    if(document.getElementById('p12').textContent == '11'){
                        var temp_val = document.getElementById('p12').textContent;
                        document.getElementById('p12').textContent = document.getElementById('p22').textContent;
                        document.getElementById('p22').textContent = temp_val;

                        document.getElementById('p12').style.background = 'url('+document.getElementById('p12').textContent+'.png)';
                        document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    if(document.getElementById('p23').textContent == '11'){
                        var temp_val = document.getElementById('p23').textContent;
                        document.getElementById('p23').textContent = document.getElementById('p22').textContent;
                        document.getElementById('p22').textContent = temp_val;

                        document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.png)';
                        document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    if(document.getElementById('p32').textContent == '11'){
                        var temp_val = document.getElementById('p32').textContent;
                        document.getElementById('p32').textContent = document.getElementById('p22').textContent;
                        document.getElementById('p22').textContent = temp_val;

                        document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.png)';
                        document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    if(document.getElementById('p21').textContent == '11'){
                        var temp_val = document.getElementById('p21').textContent;
                        document.getElementById('p21').textContent = document.getElementById('p22').textContent;
                        document.getElementById('p22').textContent = temp_val;

                        document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.png)';
                        document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    break;

            case 'p23':
                    if(document.getElementById('p13').textContent == '11'){
                        var temp_val = document.getElementById('p13').textContent;
                        document.getElementById('p13').textContent = document.getElementById('p23').textContent;
                        document.getElementById('p23').textContent = temp_val;

                        document.getElementById('p13').style.background = 'url('+document.getElementById('p13').textContent+'.png)';
                        document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    if(document.getElementById('p22').textContent == '11'){
                        var temp_val = document.getElementById('p22').textContent;
                        document.getElementById('p22').textContent = document.getElementById('p23').textContent;
                        document.getElementById('p23').textContent = temp_val;

                        document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                        document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    if(document.getElementById('p33').textContent == '11'){
                        var temp_val = document.getElementById('p33').textContent;
                        document.getElementById('p33').textContent = document.getElementById('p23').textContent;
                        document.getElementById('p23').textContent = temp_val;

                        document.getElementById('p33').style.background = 'url('+document.getElementById('p33').textContent+'.png)';
                        document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    
                    break;

            case 'p31':
                    if(document.getElementById('p21').textContent == '11'){
                        var temp_val = document.getElementById('p21').textContent;
                        document.getElementById('p21').textContent = document.getElementById('p31').textContent;
                        document.getElementById('p31').textContent = temp_val;

                        document.getElementById('p21').style.background = 'url('+document.getElementById('p21').textContent+'.png)';
                        document.getElementById('p31').style.background = 'url('+document.getElementById('p31').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    if(document.getElementById('p32').textContent == '11'){
                        var temp_val = document.getElementById('p32').textContent;
                        document.getElementById('p32').textContent = document.getElementById('p31').textContent;
                        document.getElementById('p31').textContent = temp_val;

                        document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.png)';
                        document.getElementById('p31').style.background = 'url('+document.getElementById('p31').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    break;
            
            case 'p32':
                    if(document.getElementById('p31').textContent == '11'){
                        var temp_val = document.getElementById('p31').textContent;
                        document.getElementById('p31').textContent = document.getElementById('p32').textContent;
                        document.getElementById('p32').textContent = temp_val;

                        document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.png)';
                        document.getElementById('p31').style.background = 'url('+document.getElementById('p31').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    if(document.getElementById('p22').textContent == '11'){
                        var temp_val = document.getElementById('p22').textContent;
                        document.getElementById('p22').textContent = document.getElementById('p32').textContent;
                        document.getElementById('p32').textContent = temp_val;

                        document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.png)';
                        document.getElementById('p22').style.background = 'url('+document.getElementById('p22').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    if(document.getElementById('p33').textContent == '11'){
                        var temp_val = document.getElementById('p33').textContent;
                        document.getElementById('p33').textContent = document.getElementById('p32').textContent;
                        document.getElementById('p32').textContent = temp_val;

                        document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.png)';
                        document.getElementById('p33').style.background = 'url('+document.getElementById('p33').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    
                    break;

            case 'p33':
                    if(document.getElementById('p32').textContent == '11'){
                        var temp_val = document.getElementById('p32').textContent;
                        document.getElementById('p32').textContent = document.getElementById('p33').textContent;
                        document.getElementById('p33').textContent = temp_val;

                        document.getElementById('p32').style.background = 'url('+document.getElementById('p32').textContent+'.png)';
                        document.getElementById('p33').style.background = 'url('+document.getElementById('p33').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    if(document.getElementById('p23').textContent == '11'){
                        var temp_val = document.getElementById('p23').textContent;
                        document.getElementById('p23').textContent = document.getElementById('p33').textContent;
                        document.getElementById('p33').textContent = temp_val;

                        document.getElementById('p23').style.background = 'url('+document.getElementById('p23').textContent+'.png)';
                        document.getElementById('p33').style.background = 'url('+document.getElementById('p33').textContent+'.png)';
                        number_mvs++;
                        document.getElementById('moves').textContent = "Moves:" +number_mvs;
                    }
                    break;
        }
    }
}