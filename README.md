# Props (Data Transfer)

- With methods for transferring data from one member to another
- Always have the correct view of data managed from the top level.

# State

# useEffect

The event of the component appearing on the screen. ComponentDidMount--Dogma

1. 1st parameter -> callback function to be run
2. 2nd parameter -> an empty dependency array

-- `useEffect(()=>{},[])`
Bileşenin ekrandan gitme olayı. ComponentWillUnmount

1. 1.parametre -> çalışacak olan callback function
2. 2.parametre -> boş bir bağımlılık dizisi
   -- çalışacak olan fonksiyonun return satırına bir fonksiyon eklenir ve bu fonksiyon bileşen ekrandan gittiğinde oluşur

-- `useEffect(()=> {return ()=>{}},[])`

Bileşenin props veya state aldığında meydana gelen değişiklik. ComponentDidUpdate--Güncelleme

1. 1.parametre -> çalışacak olan callback function
2. 2.parametre -> yok

-- `useEffect(()=>{})`

Bileşenin props veya state aldığında meydana gelen değişiklik. ComponentDidUpdate--2

1. 1.parametre -> çalışacak olan callback function
2. 2.parametre -> dolu bir bağımlılık dizisi

-- `useEffect(()=>{},[page,button,count])`

## Ekran Görüntüsü

![](./assets/counter1.png)
