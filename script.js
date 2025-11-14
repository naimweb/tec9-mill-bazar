 function showSection(id) {
      document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
      document.querySelectorAll("nav button").forEach(b => b.classList.remove("active"));
      document.getElementById(id).classList.add("active");
      event.target.classList.add("active");
    }

    const bazarData = [
      {
        title: "bajar 1: saturday  01-11-25",
        items: [
          { name: "alu", qty: "15 kg", price: "170 " },
          { name: "morich", qty: "1 kg ", price: "70 " },
          { name: "lau", qty :" 3 pich ", price: "30 "},
          { name: "pepe", qty: "7 pich", price: "50 "},
          { name: "piyas", qty :" 1.5 kj ", price: "125 "},
          { name: "sukna morich", qty :" ..", price: "20"},
          { name: "ada + roson", qty :" ..", price: "40 "},
          { name: "mach", qty :" 3.100 kg", price: "510 "},
          { name: "dim", qty :"44 pich", price: "440 "},
          { name: "murgi", qty :" 2.290 kg", price: "340 "},
          { name: "mosla bajar", qty :" mot ", price: 765 +30},
          
          { name: "vara + khaoa", qty :"..", price: "150 "},
          { name: "kacha bazar (ashik) ", qty :"..", price: "100"},

          { name: "alu ", qty :"3kg ", price: 60  },
          { name: "Register khata ", qty :"", price: 80 },


          
        ]
      },
      {
        title: "bazar 2: wednesday  04-11-25",
        items: [
          { name: "alu", qty: "20 kg", price: "230 " },
          { name: "piyas", qty :" 2 kj ", price: "180 "},
          { name: "morich", qty: "1.500 gram", price: "80" },
          { name: "potol", qty: "2 kg", price: "60" },
          { name: "lau", qty :" 2 pich ", price: "50 "},
          { name: "misti kumra ", qty :"  ", price: "70"},
          
          
          { name: "sukna morich", qty :" ..", price: "20"},
          { name: "ada + roson", qty :" ..", price: "50 "},
          { name: "mach", qty :" 1.600 kg", price: "240 "},
          { name: "murgi", qty :" 2.290 kg", price: "330 "},
          { name: "dim", qty :"44 pich", price: "440 "},
          { name: "mosla bajar", qty :" mot ", price: 720},
          
          { name: "vara + khaoa", qty :"..", price: "150 "},
          { name:"muri (meeting)", price:250 }

          
        ]
      },
        {
        title: "bazar 3: saturday  07-11-25",
        items: [
          { name: "alu", qty: "20 kg", price: "280 " },
          { name: "pepe", qty :" 10 kg ", price: "70 "},
          { name: "piyas", qty :" 2 kj ", price: "200 "},
          { name: "morich", qty: "2 kg", price: "140" },
         
          { name: "sukna morich", qty :" ..", price: "30"},
          { name: "ada + roson", qty :" ..", price: "30 "},
          { name: "murgi", qty :" 2.850 kg", price: "440 "},
          { name: "mach", qty :" 3.600 kg", price: "560 "},
          { name: "dim + mosla bazar", qty :"35 pich", price: "1300 "},
         
          
          { name: "vara + khaoa", qty :"..", price: "150 "},
        ]
        },
        {
        title: "bazar 4:Tuesday  10-11-25",
        items: [
          { name: "piyas", qty :" 2 kj ", price: "210 "},
          { name: "morich", qty: "1 kg", price: "100" },
          { name: "ada + roson", qty :" ..", price: "30 "},
          { name: "sukna morich", qty :" ..", price: "30"},
          { name: "alu", qty: "20 kg", price: "280 " },
          { name: "pepe", qty :" 10 kg ", price: "100 "},
          { name: "mach", qty :" 3.500 kg", price: "570 "},
         
          { name: "murgi", qty :" 3.500 kg", price: "540 "},
          { name: "dim ", qty :"45 pich", price: "425 "},
         
          { name: "mosla bajar", qty :" mot ", price: 540},
          { name: "vara + khaoa", qty :"..", price: "150 "},
        ]
        },
        {
        title: "bazar 5 : Thursday  13-11-25",
        items: [
          { name: "alu", qty: "20 kg", price: "320 " },
          { name: "putol ", qty: "1 kg", price: "40 " },
          { name: "fullkopi  ", qty: "4 kg", price: "150 " },
          { name: "piyas", qty :" 2 kj ", price: "190 "},
          { name: "morich", qty: "1 kg", price: "100" },
          { name: "ada + roson", qty :" ..", price: "30 "},
          { name: "sukna morich", qty :" ..", price: "30"},
          
          { name: "mach", qty :" 3.500 kg", price: "580"},
         
          { name: "murgi", qty :" 3.700 kg", price: "550"},
          { name: "dim ", qty :"43 pich", price: "400 "},
         
          { name: "mosla bajar", qty :" mot ", price:"680"},
          { name: "vara + khaoa", qty :"..", price: "150"},
        ],
        },

   
    ];

    const container = document.getElementById("bazarContainer");
    const savedData = JSON.parse(localStorage.getItem("bazarStatus")) || {};

    bazarData.forEach((bazar, i) => {
      const card = document.createElement("div");
      card.classList.add("bazar-card");

      const title = document.createElement("h3");
      title.textContent = bazar.title;

      const table = document.createElement("table");
      table.innerHTML = `<tr><th>আইটেম</th><th>পরিমাণ</th><th>দাম</th><th>✔</th></tr>`;

      
      let totalPrice = bazar.items.reduce((sum, item) => sum + Number(item.price), 0);

      bazar.items.forEach((item, j) => {
        const key = `${i}-${j}`;
        const checked = savedData[key]?.checked || true;

        const tr = document.createElement("tr");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = checked;

        tr.innerHTML = `
          <td>${item.name}</td>
          <td>${item.qty}</td>
          <td>${item.price} tk</td>
        `;

        const tdCheck = document.createElement("td");
        tdCheck.appendChild(checkbox);
        tr.appendChild(tdCheck);
        table.appendChild(tr);

        checkbox.addEventListener("change", () => {
          savedData[key] = { checked: checkbox.checked, item };
          localStorage.setItem("bazarStatus", JSON.stringify(savedData));
          updatePurchaseList();
        });
      });

      
      const trTotal = document.createElement("tr");
      trTotal.innerHTML = `
        <td colspan="2" style="text-align:right;font-weight:bold;">মোট দাম:</td>
        <td colspan="2" style="font-weight:bold;">${totalPrice} tk</td>
      `;
      table.appendChild(trTotal);

      card.appendChild(title);
      card.appendChild(table);
      container.appendChild(card);
    });

    function updatePurchaseList() {
      const list = document.getElementById("purchaseList");
      list.innerHTML = "";
      const data = JSON.parse(localStorage.getItem("bazarStatus")) || {};
      for (const key in data) {
        if (data[key].checked) {
          const li = document.createElement("li");
          li.textContent = `${data[key].item.name} - ${data[key].item.qty} (${data[key].item.price}৳)`;
          list.appendChild(li);
        }
      }
    }

    updatePurchaseList();

    function clearAll() {
      if (confirm("are you all data clear ?")) {
        localStorage.removeItem("bazarStatus");
        location.reload();
      }
  }

    //nabber function declear
   function toggleMenu() {
    const nav = document.getElementById("navbar")
    nav.classList.toggle("show");

  
   }