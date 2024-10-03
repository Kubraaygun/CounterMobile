# Props (veri aktarımı)

- Bir bileşenden diğerine veri aktarmak için kullandığmız yöntem
- Her zaman üst bileşenden aşağıya doğru veri aktarım yönü vardır.

# State

# useEffect

Bileşenin ekrana gelme olayı. ComponentDidMount--Dogma

1. 1.parametre -> çalışacak olan callback function
2. 2.parametre -> boş bir bağımlılık dizisi

-- `useEffect(()=>{},[])`
Bileşenin ekrandan gitmesi. ComponentWillUnmount --Ölme

1. 1.parametre -> çalışacak olan callback function
2. 2.parametre -> boş bir bağımlılık dizisi

-- `useEffect(()=> {},[])`
