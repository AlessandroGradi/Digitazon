// itero con un ciclo for
      const ai = [10, "ciao", true, 20, "js", 4];
      function calc(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          if (typeof arr[i] == "number") {
            sum += arr[i];
          }
        }
        return sum;
      }
      console.log(calc(ai));
      console.log("-----------------");

// ora con il for.each
      let sium = 0;
      ai.forEach(function (n) {
        if (typeof n == "number") {
          sium = sium + n;
        }
      });

      console.log(`la somma è ${sium}`)