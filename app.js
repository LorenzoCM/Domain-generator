let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];


function generateDomain (par1, par2, par3) {
    for (var a = 0; a < par1.length; a++) {
        for (var b = 0; b < par2.length; b++) {
            for (var c = 0; c < par3.length; c++) {
                console.log(par1[a] + par2[b] + par3[c] + ".com");
            }
        }
    }   
}

generateDomain(pronoun, adj, noun);
