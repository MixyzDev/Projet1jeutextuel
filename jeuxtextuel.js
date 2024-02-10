const prompt = require("prompt-sync")()

// let choice = 0
// console.log(prompt("Bonjour! Bienvenu dans le rue du Mal et de la Chance!"));
// choice = parseInt(prompt("Voulez-vous savoir a quel point vous etes chanceux? Oui (1) - Non (2)"));


// if (choice == 2) {
//     console.log(prompt("C'était rapide! C'est ce que dis ta meuf!!! Mouhahahahah"));
// } else if (choice == 1) {
//     console.log(prompt("Allons faire un tour! Tu veux ? 'o'"));
//     choice = parseInt(prompt("Nous allons a gauche (1) ou à droite (2)?"));
//     if (choice == 1) {
//         console.log(prompt("Tu es tombé dans un trou! RDV au centre de la terre!"));
//         choice = parseInt(prompt("La chute est longue! En attendant tu veux une bière (1) ou un café (2)"))
//         if (choice == 1) {
//             console.log("Une PaixDieu bien fraiche vous tombe dans la main!");
//             choice = parseInt(prompt("Voulez-vous la boire (1) ou la garder(2)?"))
//             if (choice == 1) {
//                 console.log(prompt("Oh nioooooon, vous etes saoûl et avez tapper votre craner de deéfoncer sur la parroie...Vous etes mort!"));
//             } else if (Choice == 2) {
//                 console.log(prompt("Je vous propose d'échanger votre bière contre une boite!"));
//                 choice = parseInt(prompt("Voulez-vous garder votre bière (1) ou l'échanger (2)?"))
//                 if (choice == 1) {
//                     console.log(prompt("Vous atterissez lamentablement sur le sol rempli de stalacmites et Michel est la pour recuperer la bière encore fraiche! Merci ^^"));
//                 } else if (choice == 2) {
//                     console.log(prompt("Vous avez gagné un parachute! Celui -ci se prend dans un courant de gezer et vous repropulse sur terre! Bien joué mon vieux!"));
//                 }
//             }
//         }else if (choice == 2) {
//             console.log(prompt("Vous obtenez un café bien chaud! quel réconfort!"));
//             choice = parseInt(prompt("Voulez-vous le boire (1) ou le garder (2)? 'o'"))
//             if (choice == 1) {
//                 console.log(prompt("Oh nion nion nioooon! C'est trop chaud pardis! Tu t'es brulé et ca t'a fait dévier de ta trajectoire...Tu as tapper la jugulaire sur un rocher très pointu et tu est mort!"));

//             } else if (choice == 2) {
//                 console.log(prompt("C'est ton jour de chance! Je te propose de l'échanger contre une boite."));
//                 choice = parseInt(prompt("Veux-tu prendre la boite (1) ou garder ton café (2)?"))
//                 if (choice == 1) {
//                     console.log(prompt("GG c'est un parachute! Enfile le!"));
//                     choice = parseInt(prompt("Tu l'as ouvert youhou! Tu veux atterrir en douceur (1) ou être violemment expulser vers la surface (2)?"))
//                     if (choice == 1) {
//                         console.log(prompt("Tu as été bien prudent! Te voilà atteri en Enfer! Enjoy :D"));
//                     } else if (choice == 2) {
//                         console.log(prompt("Tu es propulser a la vitesse de 100km/h vers la surface, tes yeux s'enfonce dans ton crane, tu en devient aveugle, tout tes poile se decolle et une fois arriver a la lumiere du jour tu atteri sur un matelas! Quel chance tu es en vie! Enjoy!"));
//                     }

//                 } else if (choice == 2) {
//                     console.log(prompt("Tu bois ton café comme un vieux rat que tu es et en plus tu meurs parce c'est un café a la Morora!"));
//                 }
//             }
//         }
//     } else if (choice == 2) {
//         console.log(prompt("Tu as marché sur un trempoline. Te voilà dans l'espace!"));
//         choice = parseInt(prompt("Waouw une occas d'aller sur la Lune! Comment y allez? Tu laches un gros pet myman (1) ou tu nage (2)"))
//         if (choice == 1) {
//             console.log(prompt("Tu t'es chier dessus! Le chilli d'hier soir detruit ta combinaison de fortune, ton masque se perce tu te met a gonfler et explose...pas de chance!"));
//         } else if (choice == 2) {
//             console.log(prompt("Ca fait maintenant 3h que tu nages, la lune est encore à 3000²millard de km, et la un Alien passe!"));
//             choice = parseInt(prompt("Il te propose de monter pour te déposer sur la lune! (1)Tu acceptes, en plus il a des bonbon! ou tu lui vole son veseau (2)?"))
//             if (choice == 1) {
//                 console.log(prompt("Tu n'as jamais vu ce qu'un Alien fait dans les film toi! Il t'emène et tu ne reviendras jamais! R.I.P."));
//             } else if (choice == 2) {
//                 console.log(prompt("Tu lui subtilise son veseau en lui faisant la technique des doigts dans les yeux et coup de pied dans les couille! Hi high captain!"));
//                 choice = parseInt(prompt("Alors capitaine! Retour sur terre (1) ou couché de soleil sur la Lune (2)?"))
//                 if (choice == 1) {
//                     console.log(prompt("Te voilà dans l'atmosphère! Mais tu es pilote toi?"));
//                     choice = parseInt(prompt("Oui je suis pilote! (1), Non (2) je ne suis pas pilote mais je joue a flightSimulator de Windows!"))
//                     if (choice == 1) {
//                         console.log(prompt("Ouf! atterrissage en douceur! tu n'as pas perdu la main! Bien joué j'espere que le voyage t'a plu!"));
//                     } else if (choice == 2) {
//                         console.log(prompt("TU SAIS PAS PILOTER!!!! Meeeeeeeerde! pouf tu t'écrase sur un matelas ou venait d'atterir un mec qui avait probablement rien demander!"));
//                     }
//                 } else if (choice == 2) {
//                     console.log(prompt("Direction la Lune à toute vitesse! En arrivant sur la lune tu découvre même la glacière secrète de l'Alien qui avait fait le plein de PaixDieu sur terre! Quelle chance!!"));
//                     choice = parseInt(prompt("Il fait nuit de ce coté de la terre il est ptet temps de rentrer? Oui (1), Non (2)"))
//                     if (choice == 1) {
//                         console.log(prompt("Arriver à mi-chemin...Panne d'essence! Te voilà destiner a érer dans l'espace Forever and ever!"));
//                     } else if (choice == 2) {
//                         console.log(prompt("Tu te crois malin? Un asteroide est tomber sur ton veseau pendant que tu dormais...J'espère qu'il te reste de la biere! Mouhahahaha"));
//                     }
//                 }
//             }
//         }
//     }
// }


let choice = 0
let retry = true
while (retry == true) {
    console.log(prompt("Bonjour! Bienvenu dans le rue du Mal et de la Chance!"));
    choice = parseInt(prompt("Voulez-vous savoir a quel point vous etes chanceux? Oui (1) - Non (2)"));
    while (choice != 1 && choice != 2) {
        choice = parseInt(prompt("Voulez-vous savoir a quel point vous etes chanceux? Oui (1) - Non (2)"));
    }
    if (choice == 2) {
        console.log(prompt("C'était rapide! C'est ce que dis ta meuf!!! Mouhahahahah"));
        
        if (choice == 1) {
            choice = parseInt(prompt("Voulez-vous savoir a quel point vous etes chanceux? Oui (1) - Non (2)"));
        }
    } else if (choice == 1) {
        console.log(prompt("Allons faire un tour! Tu veux ? 'o'"));
        choice = parseInt(prompt("Nous allons a gauche (1) ou à droite (2)?"));
        while (choice != 1 && choice != 2) {
            choice = parseInt(prompt("Nous allons a gauche (1) ou à droite (2)?"));
        }
        if (choice == 1) {
            console.log(prompt("Tu es tombé dans un trou! RDV au centre de la terre!"));
            choice = parseInt(prompt("La chute est longue! En attendant tu veux une bière (1) ou un café (2)"))
            while (choice != 1 && choice != 2) {
                choice = parseInt(prompt("La chute est longue! En attendant tu veux une bière (1) ou un café (2)"))
            }
            if (choice == 1) {
                console.log("Une PaixDieu bien fraiche vous tombe dans la main!");
                choice = parseInt(prompt("Voulez-vous la boire (1) ou la garder(2)?"))
                while (choice != 1 && choice != 2) {
                    choice = parseInt(prompt("Voulez-vous la boire (1) ou la garder(2)?"))
                }
                if (choice == 1) {
                    console.log(prompt("Oh nioooooon, vous etes saoûl et avez tapper votre craner de deéfoncer sur la parroie...Vous etes mort!"));
                } else if (Choice == 2) {
                    console.log(prompt("Je vous propose d'échanger votre bière contre une boite!"));
                    choice = parseInt(prompt("Voulez-vous garder votre bière (1) ou l'échanger (2)?"))
                    while (choice != 1 && choice != 2) {
                        choice = parseInt(prompt("Voulez-vous garder votre bière (1) ou l'échanger (2)?"))
                    }
                    if (choice == 1) {
                        console.log(prompt("Vous atterissez lamentablement sur le sol rempli de stalacmites et Michel est la pour recuperer la bière encore fraiche! Merci ^^"));
                    } else if (choice == 2) {
                        console.log(prompt("Vous avez gagné un parachute! Celui -ci se prend dans un courant de gezer et vous repropulse sur terre! Bien joué mon vieux!"));
                    }
                }
            } else if (choice == 2) {
                console.log(prompt("Vous obtenez un café bien chaud! quel réconfort!"));
                choice = parseInt(prompt("Voulez-vous le boire (1) ou le garder (2)? 'o'"))
                while (choice != 1 && choice != 2) {
                    choice = parseInt(prompt("Voulez-vous le boire (1) ou le garder (2)? 'o'"))
                }
                if (choice == 1) {
                    console.log(prompt("Oh nion nion nioooon! C'est trop chaud pardis! Tu t'es brulé et ca t'a fait dévier de ta trajectoire...Tu as tapper la jugulaire sur un rocher très pointu et tu est mort!"));

                } else if (choice == 2) {
                    console.log(prompt("C'est ton jour de chance! Je te propose de l'échanger contre une boite."));
                    choice = parseInt(prompt("Veux-tu prendre la boite (1) ou garder ton café (2)?"))
                    while (choice != 1 && choice != 2) {
                        choice = parseInt(prompt("Veux-tu prendre la boite (1) ou garder ton café (2)?"))
                    }
                    if (choice == 1) {
                        console.log(prompt("GG c'est un parachute! Enfile le!"));
                        choice = parseInt(prompt("Tu l'as ouvert youhou! Tu veux atterrir en douceur (1) ou être violemment expulser vers la surface (2)?"))
                        while (choice != 1 && choice != 2) {
                            choice = parseInt(prompt("Tu l'as ouvert youhou! Tu veux atterrir en douceur (1) ou être violemment expulser vers la surface (2)?"))
                        }
                        if (choice == 1) {
                            console.log(prompt("Tu as été bien prudent! Te voilà atteri en Enfer! Enjoy :D"));
                        } else if (choice == 2) {
                            console.log(prompt("Tu es propulser a la vitesse de 100km/h vers la surface, tes yeux s'enfonce dans ton crane, tu en devient aveugle, tout tes poile se decolle et une fois arriver a la lumiere du jour tu atteri sur un matelas! Quel chance tu es en vie! Enjoy!"));
                        }

                    } else if (choice == 2) {
                        console.log(prompt("Tu bois ton café comme un vieux rat que tu es et en plus tu meurs parce c'est un café a la Morora!"));
                    }
                }
            }
        } else if (choice == 2) {
            console.log(prompt("Tu as marché sur un trempoline. Te voilà dans l'espace!"));
            choice = parseInt(prompt("Waouw une occas d'aller sur la Lune! Comment y allez? Tu laches un gros pet myman (1) ou tu nage (2)"))
            while (choice != 1 && choice != 2) {
                choice = parseInt(prompt("Waouw une occas d'aller sur la Lune! Comment y allez? Tu laches un gros pet myman (1) ou tu nage (2)"))
            }
            if (choice == 1) {
                console.log(prompt("Tu t'es chier dessus! Le chilli d'hier soir detruit ta combinaison de fortune, ton masque se perce tu te met a gonfler et explose...pas de chance!"));
            } else if (choice == 2) {
                console.log(prompt("Ca fait maintenant 3h que tu nages, la lune est encore à 3000²millard de km, et la un Alien passe!"));
                choice = parseInt(prompt("Il te propose de monter pour te déposer sur la lune! (1)Tu acceptes, en plus il a des bonbon! ou tu lui vole son veseau (2)?"))
                while (choice != 1 && choice != 2) {
                    choice = parseInt(prompt("Il te propose de monter pour te déposer sur la lune! (1)Tu acceptes, en plus il a des bonbon! ou tu lui vole son veseau (2)?"))
                }
                if (choice == 1) {
                    console.log(prompt("Tu n'as jamais vu ce qu'un Alien fait dans les film toi! Il t'emène et tu ne reviendras jamais! R.I.P."));
                } else if (choice == 2) {
                    console.log(prompt("Tu lui subtilise son veseau en lui faisant la technique des doigts dans les yeux et coup de pied dans les couille! Hi high captain!"));
                    choice = parseInt(prompt("Alors capitaine! Retour sur terre (1) ou couché de soleil sur la Lune (2)?"))
                    while (choice != 1 && choice != 2) {
                        choice = parseInt(prompt("Alors capitaine! Retour sur terre (1) ou couché de soleil sur la Lune (2)?"))
                    }
                    if (choice == 1) {
                        console.log(prompt("Te voilà dans l'atmosphère! Mais tu es pilote toi?"));
                        choice = parseInt(prompt("Oui je suis pilote! (1), Non (2) je ne suis pas pilote mais je joue a flightSimulator de Windows!"))
                        while (choice != 1 && choice != 2) {
                            choice = parseInt(prompt("Oui je suis pilote! (1), Non (2) je ne suis pas pilote mais je joue a flightSimulator de Windows!"))
                        }
                        if (choice == 1) {
                            console.log(prompt("Ouf! atterrissage en douceur! tu n'as pas perdu la main! Bien joué j'espere que le voyage t'a plu!"));
                        } else if (choice == 2) {
                            console.log(prompt("TU SAIS PAS PILOTER!!!! Meeeeeeeerde! pouf tu t'écrase sur un matelas ou venait d'atterir un mec qui avait probablement rien demander!"));
                        }
                    } else if (choice == 2) {
                        console.log(prompt("Direction la Lune à toute vitesse! En arrivant sur la lune tu découvre même la glacière secrète de l'Alien qui avait fait le plein de PaixDieu sur terre! Quelle chance!!"));
                        choice = parseInt(prompt("Il fait nuit de ce coté de la terre il est ptet temps de rentrer? Oui (1), Non (2)"))
                        while (choice != 1 && choice != 2) {
                            choice = parseInt(prompt("Il fait nuit de ce coté de la terre il est ptet temps de rentrer? Oui (1), Non (2)"))
                        }
                        if (choice == 1) {
                            console.log(prompt("Arriver à mi-chemin...Panne d'essence! Te voilà destiner a érer dans l'espace Forever and ever!"));
                        } else if (choice == 2) {
                            console.log(prompt("Tu te crois malin? Un asteroide est tomber sur ton veseau pendant que tu dormais...J'espère qu'il te reste de la biere! Mouhahahaha"));
                        }
                    }
                }
            }
        }
    }
    let res =parseInt( prompt("Voulez-vous rejouer? oui (1) ou Non (2)"))
    if (res == 1) {
        retry = true
    }else {
        retry = false
    }
}


