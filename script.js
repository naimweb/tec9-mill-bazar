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
          { name: "mosla bajar", qty :" mot ", price: 765},
          
          { name: "vara + khaoa", qty :"..", price: "150 "},
          { name: "alu ", qty :"3kg ", price: "60 tk "},

          
        ]
      },
      // {
      //   title: "বাজার ২: মঙ্গলবার",
      //   items: [
      //     { name: "আলু", qty: "৩ কেজি", price: 900 },
      //     { name: "পেঁয়াজ", qty: "২ কেজি", price: 120 },
      //     { name: "মুরগি", qty: "১.৫ কেজি", price: 360 }
      //   ]
      // },
      // {
      //   title: "বাজার ২: মঙ্গলবার",
      //   items: [
      //     { name: "আলু", qty: "৩ কেজি", price: 900 },
      //     { name: "পেঁয়াজ", qty: "২ কেজি", price: 120 },
      //     { name: "মুরগি", qty: "১.৫ কেজি", price: 360 }
      //   ]
      // },
      // {
      //   title: "বাজার ২: মঙ্গলবার",
      //   items: [
      //     { name: "আলু", qty: "৩ কেজি", price: 900 },
      //     { name: "পেঁয়াজ", qty: "২ কেজি", price: 120 },
      //     { name: "মুরগি", qty: "১.৫ কেজি", price: 360 }
      //   ]
      // },
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
        const checked = savedData[key]?.checked || false;

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
      if (confirm("সব ডেটা মুছে ফেলতে চাও?")) {
        localStorage.removeItem("bazarStatus");
        location.reload();
      }
    }