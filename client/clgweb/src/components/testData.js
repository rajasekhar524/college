
const donutChartData = [{group:"Vermont",measure:"0.10"},
{group:"Wyoming",measure:"0.15"},
{group:"Ohio",measure:"0.15"},
{group:"Hawaii",measure:"0.5"},
{group:"Oregon",measure:"0.5"},
{group:"Alabama",measure:"0.20"},
{group:"Northern Mariana Islands",measure:"0.15"},
{group:"American Samoa",measure:"0.0.5"}
];




  
  const barChartData = [
    { group: "All",     category: "Ohio", measure: 63850.4963 },
    { group: "All",     category: "American Samoa", measure: 78258.0845 },
    { group: "All",     category: "Alabama", measure: 60610.2355 },
    { group: "All",     category: "Wyoming", measure: 30493.1686 },
    { group: "All",     category: "Vermont", measure: 56097.0151 },
    { group: "Vermont", category: "Ohio", measure: 19441.5648 },
    { group: "Vermont", category: "American Samoa", measure: 25922.0864 },
    { group: "Vermont", category: "Alabama", measure: 9720.7824 },
    { group: "Vermont", category: "Wyoming", measure: 6480.5216 },
    { group: "Vermont", category: "Vermont", measure: 19441.5648 },
    { group: "Wyoming", category: "Ohio", measure: 22913.2728 },
    { group: "Wyoming", category: "American Samoa", measure: 7637.7576 },
    { group: "Wyoming", category: "Alabama", measure: 23549.7526 },
    { group: "Wyoming", category: "Wyoming", measure: 1909.4394 },
    { group: "Wyoming", category: "Vermont", measure: 7637.7576 },
    { group: "Ohio",    category: "Ohio", measure: 1041.5124 },
    { group: "Ohio",    category: "American Samoa", measure: 2430.1956 },
    { group: "Ohio",    category: "Alabama", measure: 15275.5152 },
    { group: "Ohio",    category: "Wyoming", measure: 4166.0496 },
    { group: "Ohio",    category: "Vermont", measure: 11803.8072 },
    { group: "Hawaii",  category: "Ohio", measure: 7406.3104 },
    { group: "Hawaii",  category: "American Samoa", measure: 2545.9192 },
    { group: "Hawaii",  category: "Alabama", measure: 1620.1304 },
    { group: "Hawaii",  category: "Wyoming", measure: 8563.5464 },
    { group: "Hawaii",  category: "Vermont", measure: 3008.8136 },
    { group: "Oregon",  category: "Ohio", measure: 7637.7576 },
    { group: "Oregon",  category: "American Samoa", measure: 35411.4216 },
    { group: "Oregon",  category: "Alabama", measure: 8332.0992 },
    { group: "Oregon",  category: "Wyoming", measure: 6249.0744 },
    { group: "Oregon",  category: "Vermont", measure: 11803.8072 },
    { group: "Alabama", category: "American Samoa", measure: 867.927 },
    { group: "Alabama", category: "Ohio", measure: 3182.399 },
    { group: "Alabama", category: "Alabama", measure: 1808.18125 },
    { group: "Alabama", category: "Wyoming", measure: 795.59975 },
    { group: "Alabama", category: "Vermont", measure: 578.618 },
    { group: "Northern Mariana Islands",   category: "Ohio", measure: 2227.6793 },
    { group: "Northern Mariana Islands",   category: "American Samoa", measure: 3442.7771 },
    { group: "Northern Mariana Islands",   category: "Alabama", measure: 303.77445 },
    { group: "Northern Mariana Islands",   category: "Wyoming", measure: 2328.93745 },
    { group: "Northern Mariana Islands",   category: "Vermont", measure: 1822.6467 },
    { group: "American Samoa",  category: 2008, measure: 34717.08 },
    { group: "American Samoa",  category: 2009, measure: 30549.74 },
    { group: "American Samoa",  category: 2010, measure: 34199 },
    { group: "American Samoa",  category: 2011, measure: 33585 },
    { group: "American Samoa",  category: 2012, measure: 35175 },
  ];
  
  const lineChartData = [
    { group: "All",     category: 2008, measure: 209 },
    { group: "All",     category: 2009, measure: 298 },
    { group: "All",     category: 2010, measure: 300 },
    { group: "All",     category: 2011, measure: 200 },
    { group: "All",     category: 2012, measure: 200 },
    { group: "Vermont", category: 2008, measure: 86.52 },
    { group: "Vermont", category: 2009, measure: 79.4 },
    { group: "Vermont", category: 2010, measure: 99 },
    { group: "Vermont", category: 2011, measure: 61 },
    { group: "Vermont", category: 2012, measure: 70 },
    { group: "Wyoming", category: 2008, measure: 67.98 },
    { group: "Wyoming", category: 2009, measure: 69.48 },
    { group: "Wyoming", category: 2010, measure: 82 },
    { group: "Wyoming", category: 2011, measure: 54 },
    { group: "Wyoming", category: 2012, measure: 55 },
    { group: "Ohio",    category: 2008, measure: 24.72 },
    { group: "Ohio",    category: 2009, measure: 19.88 },
    { group: "Ohio",    category: 2010, measure: 15 },
    { group: "Ohio",    category: 2011, measure: 15 },
    { group: "Ohio",    category: 2012, measure: 15 },
    { group: "Hawaii",  category: 2008, measure: 37.08 },
    { group: "Hawaii",  category: 2009, measure: 39.74 },
    { group: "Hawaii",  category: 2010, measure: 39 },
    { group: "Hawaii",  category: 2011, measure: 35 },
    { group: "Hawaii",  category: 2012, measure: 35 },
    { group: "Oregon",  category: 2008, measure: 64.16 },
    { group: "Oregon",  category: 2009, measure: 49.6 },
    { group: "Oregon",  category: 2010, measure: 60 },
    { group: "Oregon",  category: 2011, measure: 42 },
    { group: "Oregon",  category: 2012, measure: 40 },
    { group: "Alabama", category: 2008, measure: 7.725 },
    { group: "Alabama", category: 2009, measure: 4.96 },
    { group: "Alabama", category: 2010, measure: 6 },
    { group: "Alabama", category: 2011, measure: 8 },
    { group: "Alabama", category: 2012, measure: 9 },
    { group: "Northern Mariana Islands",   category: 2008, measure: 105.815 },
    { group: "Northern Mariana Islands",   category: 2009, measure: 70.94 },
    { group: "Northern Mariana Islands",   category: 2010, measure: 93 },
    { group: "Northern Mariana Islands",   category: 2011, measure: 67 },
    { group: "Northern Mariana Islands",   category: 2012, measure: 70 },
    { group: "American Samoa",  category: 2008, measure: 34.08 },
    { group: "American Samoa",  category: 2009, measure: 30.74 },
    { group: "American Samoa",  category: 2010, measure: 34 },
    { group: "American Samoa",  category: 2011, measure: 33 },
    { group: "American Samoa",  category: 2012, measure: 35 }
  ];
  
  export { donutChartData, barChartData, lineChartData };
  