p = "I Love Programming!"
p1 = "", p2 = ""
for (t of p) {
    if (t != " "){
        p2 = p2 + t
        p1 = t + p1
     }else {
          console.log(p2)
            p1 = ""
            p2 = ""
     }
}