var a="" //put your minified css in here
var  b=a.split("px")
var c=[]
for(var i=0;i<b.length-1;i++){
var w=""
for(var j=(b[i].length-1);j>=0;j--){
if(b[i][j]==" " || b[i][j]==":"){
    if(b[i][j]===":") b[i] = b[i].substring(0,j)+":"+String(Number(w)*(625/10000))+"rem"
    else if(b[i][j]===" ") b[i] = b[i].substring(0,j)+" "+String(Number(w)*(625/10000))+"rem"
    
break;    
}
else{
w=b[i][j]+w;
}
}}

var ans = b.join('')
