# Props (veri aktarımı)

- Bir bileşenden diğerine veri aktarmak için kullandığmız yöntem
- Her zaman üst bileşenden aşağıya doğru veri aktarım yönü vardır.

# State

# useEffect

Bileşenin ekrana gelme olayı. ComponentDidMount--Dogma

1. 1.parametre -> çalışacak olan callback function
2. 2.parametre -> boş bir bağımlılık dizisi

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
