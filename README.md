# React-App-With-PHP-Rest
A React App with PHP OOP REST API and MySQL server

## Bu projede neler var?

Bu proje CRUD yeteneklerine sahip, OOP prensipleri ile yazılmış bir PHP back-end'e ve React kütüphanesi kullanılarak oluşturulmuş bir front-end'e sahiptir. Front-end ile back-end arası iletişim, React tarafında axios, PHP tarafında ise REST API aracılığıyla yapılmaktadır.

## Gereksinimler

Projeyi çalıştırmak için kendi tercihiniz bir php server'a yüklemeniz yeterlidir.(Örn: Apache).

### Hızlı Kurulum
En hızlı şekilde siteyi devreye almak için:

Proje root klasöründeki sarf.sql dump dosyasını, MySQL kurulumunuzda bir şemaya aktarın.
Ardından, `./api/config/database.php` dosyasında, aşağıdaki kısımda kullanıcı adı ve şifre ayarlarınızı yapın:

```php
      // ...
      private $username = "username";
      private $password = "xxxxxx";
      // ...
```
Son olarak, www klasöründe aşağıdaki komutu çalıştırmanız yeterli olacaktır:

``` php -S 127.0.0.1:8000 ```
(php -S production amaçlı değildir!)

Front-end'in sadece build edilmiş halini kullanmak değil, development versiyonunu da görebilmek ve düzenleme yapabilmek için, aşağıdaki adımları izlemeniz gerekmektedir:

### Node JS yükleyin.
https://nodejs.org adresindeki talimatları izleyebilirsiniz.

### create-react-app 'i yükleyin.
global olarak create-react-app'i yüklemek için:

```bash
npm install -g create-react-app
```

### Projeyi lokal makinenize klonlayın:
Bunun için `git clone https://github.com/dilaraCerenMoral/React-App-With-PHP-Rest.git` komutunu kullanabilirsiniz.

### Node paketlerini yükleyin ve projeyi çalıştırın:
`npm install` ve ardından `npm start komutlarını kullanmanız gerekecektir.`

**Uygulama, 127.0.0.1:8000 üzerinde çalışacak bir PHP server'ı için düşünülmüştür.** Uygulama, CORS gözetilerek yazılmıştır. Farklı bir setup'a geçmek, farklı portlar kullanmak zorundaysanız, axios parametrelerini de düzenlemeniz gerekecektir.

- Front end dosyaları, **./app/**
- Back end dosyaları, **./api/** klasöründe bulunur.


#### Fix
Eğer kurulumdan sonra, mevcut global yüklemelerinizden kaynaklı sorunlar yaşarsanız, `npm audit fix` komutunu kullanabilirsiniz.
