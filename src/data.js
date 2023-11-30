const userData = {
    id: "root",
    name: "Data",
    children: [
      {
        id: "1",
        name: "Admin access only",
        disabled: true,
        children: [
          {
              id: "200",
              name: "Secret file"
          }
        ]
      },
      {
        id: "2",
        name: "Fruits",
        children: [
          {
            id: "4",
            name: "Berries",
            disabled: true,
            children: [
              {
                id: "5",
                name: "Tomatoes",
              },
              {
                  id: "6",
                  name: "Grapes",
              },
            ],
          },
          {
              id: "7",
              name: "Drupes",
              children: [
                  {
                      id: "8",
                      name: "Plums",
                  },
                  {
                      id: "9",
                      name: "Peaches",
                  }
              ]
          },
          {
              id: "10",
              name: "Pomes",
              children: [
                  {
                      id: "11",
                      name: "Apples",
                  },
                  {
                      id: "12",
                      name: "Pears",
                  }
              ]
          }
        ],
      },
      {
          id: "3",
          name: "Vegetables", 
          children: [
              {
                  id: "9",
                  name: "Child - 12",  
              }
          ]
      }
    ],
  };

  export default userData;