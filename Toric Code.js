var blossom = require('edmonds-blossom');

function two_point_2d(L,p){
    var L_E=Array();
    for (var num1=1;num1<=L;num1++){
        for (var num2=1;num2<=L;num2++){
            if (Math.random()>=p){var two_point_e1=0;}
            else{var two_point_e1=1}
            if (Math.random()>=p){var two_point_e2=0;}
            else{var two_point_e2=1}
            var L_E_e=[num1,num2,two_point_e1,two_point_e2];
            
            L_E.push(L_E_e);
            
        }
    }
    return L_E 
}

function show_check_ans(lattice){
    var Check_para=Array()
    L_a=Math.pow(lattice.length,0.5);
    L=lattice.length
    for (var num1=0;num1<L;num1++){
        
        var lattice_e=lattice[num1];
        var lattice_elink2=lattice_e[2]+lattice_e[3]
        if (lattice_e[0]!=1 && lattice_e[1]!=1){
            for (var num2=0;num2<L;num2++){
                var lattice_e2=lattice[num2];
                
                if (lattice_e2[1]==lattice_e[1]-1 && lattice_e2[0]==lattice_e[0]){
                    if (lattice_e2[2]==1){var lattice_elink3=1}
                    else{var lattice_elink3=0}
                    
                    for (var num3=0;num3<L;num3++){
                        var lattice_e3=lattice[num3]
                        if (lattice_e3[0]==lattice_e[0]-1&&lattice_e3[1]==lattice_e[1]){
                            if (lattice_e3[3]==1){var lattice_elink4=1}
                            else{var lattice_elink4=0}
                            var check_number_e_ini=lattice_elink2+lattice_elink3+lattice_elink4
                            if (check_number_e_ini==1 || check_number_e_ini==3){
                                var check_number_e=[lattice_e[0],lattice_e[1]]
                                Check_para.push(check_number_e)
                                
                            }
                        }
                    }
                }
            }
        }
        if (lattice_e[0]==1 && lattice_e[1]!=1){
            
            for (var num2=0;num2<L;num2++){
                var lattice_e2=lattice[num2];
                if (lattice_e2[1]==lattice_e[1]-1 && lattice_e2[0]==1){
                    if (lattice_e2[2]==1){var lattice_elink3=1}
                    else{var lattice_elink3=0}
                    for (var num3=0;num3<L;num3++){
                        var lattice_e3=lattice[num3]
                        if (lattice_e3[0]==L_a && lattice_e3[1]==lattice_e[1]){
                            if (lattice_e3[3]==1){var lattice_elink4=1}
                            else{var lattice_elink4=0}
                            var check_number_e_ini=lattice_elink2+lattice_elink3+lattice_elink4
                            
                            if (check_number_e_ini==1 || check_number_e_ini==3){
                                var check_number_e=[lattice_e[0],lattice_e[1]]
                                Check_para.push(check_number_e)
                                
                            }
                        }
                    }
                }
            }
        }
        if (lattice_e[0]!=1 && lattice_e[1]==1){
            for (var num2=0;num2<L;num2++){
                var lattice_e2=lattice[num2];
                if (lattice_e2[1]==L_a && lattice_e2[0]==lattice_e[0]){
                    if (lattice_e2[2]==1){var lattice_elink3=1}
                    else{var lattice_elink3=0}
                    
                    for (var num3=0;num3<L;num3++){
                        var lattice_e3=lattice[num3]
                        if (lattice_e3[0]==lattice_e[0]-1 && lattice_e3[1]==1){
                            if (lattice_e3[3]==1){var lattice_elink4=1}
                            else{var lattice_elink4=0}
                            var check_number_e_ini=lattice_elink2+lattice_elink3+lattice_elink4
                            if (check_number_e_ini==1 || check_number_e_ini==3){
                                var check_number_e=[lattice_e[0],lattice_e[1]]
                                Check_para.push(check_number_e)
                                
                            }
                        }
                    }
                }
            }
        }
        if (lattice_e[0]==1 && lattice_e[1]==1){
            for (var num2=0;num2<L;num2++){
                var lattice_e2=lattice[num2];
                if (lattice_e2[1]==L_a && lattice_e2[0]==1){
                    if (lattice_e2[2]==1){var lattice_elink3=1}
                    else{var lattice_elink3=0}
                    
                    for (var num3=0;num3<L;num3++){
                        var lattice_e3=lattice[num3]
                        if (lattice_e3[0]==L_a && lattice_e3[1]==1){
                            if (lattice_e3[3]==1){var lattice_elink4=1}
                            else{var lattice_elink4=0}
                            var check_number_e_ini=lattice_elink2+lattice_elink3+lattice_elink4
                            
                            
                            if (check_number_e_ini==1 || check_number_e_ini==3){
                                var check_number_e=[lattice_e[0],lattice_e[1]]
                                Check_para.push(check_number_e)
                                
                            }
                        }
                    }
                }
            }
        }
    }
    return Check_para
}


function dictlize_2defects_couple(dictlized_defects){
    var boundary_half_size=LL/2
    var dicted_coupled=[]
    for (var num1=0;num1<dictlized_defects.length;num1++){
        for (var num2=0;num2<dictlized_defects.length;num2++){
            if(num2>num1){
                var x1=dictlized_defects[num1][1];
                var y1=dictlized_defects[num1][0];
                var x2=dictlized_defects[num2][1];
                var y2=dictlized_defects[num2][0];
                
                var distant_x = Math.abs(x1-x2)
                var distant_y = Math.abs(y1-y2)
                
                global['D'+parseInt(num1)+'_'+parseInt(num2)]={}
                var opone=eval('D'+parseInt(num1)+'_'+parseInt(num2))
                
                opone.defect1=num1
                opone.defect2=num2
                if(distant_x >= boundary_half_size){
                    opone.para_x=1
                    var distant_x = LL-distant_x}
                else{opone.para_x=0}
                if(distant_y >= boundary_half_size){
                    opone.para_y=1
                    var distant_y = LL-distant_y}
                else{opone.para_y=0}
                
                opone.free_energy=distant_x + distant_y
                dicted_coupled.push('D'+parseInt(num1)+'_'+parseInt(num2))
            }
        }
    }
    return dicted_coupled
}

function py_translate_to_java(DICT_PY){
    java_list=[]
    for (var num1=0;num1<DICT_PY.length;num1++){
        var e_1=eval(DICT_PY[num1])
        var java_list_one1=e_1.defect1
        var java_list_one2=e_1.defect2
        var java_list_one3=2*LL-e_1.free_energy
        var java_list_one=[java_list_one1,java_list_one2,java_list_one3]
        java_list.push(java_list_one)}
    
    return java_list
    }

function java_translate_to_py(ANS_JAVA){
    
    picked_list=[]
    for (var num1=0;num1<ANS_JAVA.length;num1++){
        var num2=ANS_JAVA[num1]
        if (num1<num2){
            picked_list.push('D'+parseInt(num1)+'_'+parseInt(num2))
        }
    }
    return picked_list
}

function the_fin_result(A,picked_one){
    var para_all_x=0
    var para_all_y=0
    for (var num1=0;num1<A.length;num1++){
        unchecked_topeam_x_e=A[num1]
        if (unchecked_topeam_x_e[1] == LL && unchecked_topeam_x_e[2] == 1){para_all_x+=1}
        if (unchecked_topeam_x_e[0] == LL && unchecked_topeam_x_e[3] == 1){para_all_y+=1}
    }
    for (var num1=0;num1<picked_one.length;num1++){
        coupled_one=picked_one[num1]
        if (eval(coupled_one).para_x==1){para_all_x+=1}else{}
        if (eval(coupled_one).para_y==1){para_all_y+=1}else{}
    }
    if (para_all_x%2 ==0 && para_all_y%2 ==0){result=0}else{result=1}
    return result
}

/*times=0;LL_end=15;t_end=50000;
ans_X=[];ans_Y=[]

for (var LL=3;LL<=LL_end;LL++){
    var ans_Xe=[]
    var ans_Ye=[]
    for (var p=0.1;p<0.12;p+=0.002){
        
        var t_default=0
        for (var t=0;t<=t_end;t++){
            var Aa=two_point_2d(LL,p); var Bb=show_check_ans(Aa);
            var Cc=dictlize_2defects_couple(Bb);
            var Dd=py_translate_to_java(Cc);var Ee=blossom(Dd);var Ff=java_translate_to_py(Ee);
            var Gg=the_fin_result(Aa,Ff);
            t_default+=Gg
            
        }
        ans_Ye.push(t_default)
    }
    ans_X.push(LL)
    ans_Y.push(ans_Ye)
    console.log(LL,ans_Ye)
}

console.log(ans_X)
console.log(ans_Y)8*/

/*LL=4;
var Aa=two_point_2d(LL,p)
var Aa=[ [ 1, 1, 1, 0 ],
  [ 1, 2, 1, 0 ],
  [ 1, 3, 1, 0 ],
  [ 1, 4, 1, 0 ],
  [ 2, 1, 1, 0 ],
  [ 2, 2, 1, 0 ],
  [ 2, 3, 1, 0 ],
  [ 2, 4, 1, 0 ],
  [ 3, 1, 0, 0 ],
  [ 3, 2, 0, 0 ],
  [ 3, 3, 0, 0 ],
  [ 3, 4, 0, 0 ],
  [ 4, 1, 0, 0 ],
  [ 4, 2, 0, 0 ],
  [ 4, 3, 0, 0 ],
  [ 4, 4, 0, 0 ] ]
var Bb=show_check_ans(Aa);
var Cc=dictlize_2defects_couple(Bb);
var Dd=py_translate_to_java(Cc);var Ee=blossom(Dd);var Ff=java_translate_to_py(Ee);
var Gg=the_fin_result(Aa,Ff)
console.log(Aa)
console.log(Bb)
console.log(Ff)
console.log(Gg)*/

times=0;LL_end=13;t_end=10000;
ans_X=[];ans_Y=[]

for (var LL=1;LL<=LL_end;LL+=2){
    var ans_Xe=[]
    var ans_Ye=[]
    for (var p=0.03;p<0.11;p+=0.01){
        
        var t_default=0
        for (var t=0;t<=t_end;t++){
            var Aa=two_point_2d(LL,p); var Bb=show_check_ans(Aa);
            var Cc=dictlize_2defects_couple(Bb);
            var Dd=py_translate_to_java(Cc);var Ee=blossom(Dd);var Ff=java_translate_to_py(Ee);
            var Gg=the_fin_result(Aa,Ff);
            t_default+=Gg
            
        }
        ans_Ye.push(t_default)
    }
    ans_X.push(LL)
    ans_Y.push([p,ans_Ye])
    console.log(ans_Ye)
}

console.log(ans_X)
console.log(ans_Y)
