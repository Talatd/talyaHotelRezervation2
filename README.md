Talya Hotel Reservation System

🏨 Multi-Tenant Otel Rezervasyon Platformu: Araştırma ve Yol Haritası Elektrwaweb Talya Bilişim bünyesinde geliştirilmesi planlanan bu proje, birden fazla otelin kendi envanterlerini, fiyatlarını ve rezervasyonlarını yönetebileceği Multi-Tenant (Çok Kiracılı) bir Otel Rezervasyon Platformu'dur. Bu doküman, projenin analizini, temel mimari yaklaşımını ve hangi aşamalardan geçerek hayata geçirileceğine dair bir yol haritasını sunmaktadır.

Amacımız, hem son kullanıcıya zengin filtreleme ve keşif araçlarıyla kişiselleştirilmiş bir deneyim sunmak hem de otel işletmelerine kendi operasyonlarını yönetecekleri ve pazarlayacakları güçlü bir panel sağlamaktır.

🎯 Proje Vizyonu ve Kapsamına Genel Bakış Bu platformun temel vizyonu, otelcilik sektöründeki dijitalleşme ihtiyacına yenilikçi, ölçeklenebilir ve çoklu otel yönetimine uygun bir çözüm getirmektir. Projenin kapsamı, temel rezervasyon mekanizmalarından, otel yöneticisi panellerine ve dinamik fiyatlandırma yeteneklerine kadar geniş bir yelpazeyi kapsamaktadır.

💡 Multi-Tenant Yaklaşımın Önemi ve Analizi Projenin en kritik noktalarından biri multi-tenant (çok kiracılı) yapıda olmasıdır. Bu, her bir otelin (kiracı) platform üzerinde kendine ait, izole edilmiş bir ortamda çalışması anlamına gelirken, tüm kaynakların (kod tabanı, veritabanı şeması) ortak kullanıldığı bir mimariyi gerektirir.

Neden Multi-Tenant?

Ölçeklenebilirlik: Yeni otelleri kolayca platforma dahil etme yeteneği.

Maliyet Etkinliği: Her otel için ayrı bir yazılım veya sunucu yerine, tek bir platform üzerinden hizmet sunumu.

Yönetim Kolaylığı: Tek bir kod tabanında yapılan güncellemelerin tüm otellere uygulanabilmesi.

Veri İzolasyonu: Her otelin verisinin diğer otellerden bağımsız ve güvenli bir şekilde saklanması.

Multi-Tenant Çözüm Araştırması:

Veritabanı Seviyesinde:

Paylaşımlı Veritabanı, Paylaşımlı Şema (En sık kullanılan): Tüm oteller aynı veritabanını ve aynı tabloları kullanır, her tabloda tenant_id (otel ID'si) bulunur. Bu yaklaşım başlangıç için en uygunudur.

Paylaşımlı Veritabanı, Ayrı Şemalar: Her otel için aynı veritabanında ayrı bir şema oluşturulur.

Ayrı Veritabanları: Her otel için tamamen ayrı bir veritabanı kullanılır (daha karmaşık ve maliyetli).

Uygulama Seviyesinde: Gelen isteğin hangi otele ait olduğunun tespit edilmesi ve veri erişimlerinin bu tenant_id'ye göre filtrelenmesi kritik öneme sahiptir.

📊 Platformun Ana Sistemleri ve Modüler Yapısı Platform, kapsamlı bir analiz sonucunda belirlenen ve birbiriyle entegre çalışan modüler sistemler üzerine inşa edilecektir:

Kullanıcı ve Kimlik Yönetim Sistemi Platforma giren her aktörün (misafir, otel yöneticisi, platform yöneticisi) kimliğini, rolünü ve yetkilerini yönetir. Bu sistemde otel yöneticilerinin sadece kendi otellerine ait verilere erişebilmesi rol tabanlı yetkilendirme (RBAC) ile sağlanacaktır.

Otel ve İçerik Yönetim Sistemi Otel yöneticilerinin kendi otellerinin dijital vitrinlerini oluşturup yönettikleri alandır. Burada her otelin kendine özel envanter (oda tipleri, fiziksel odalar), fiyatlandırma ve görsel içeriklerini bağımsız olarak yönetebilmesi temel esastır.

Arama, Keşif ve Filtreleme Motoru Misafirlerin otelleri konum, tarih, kişi sayısı ve diğer detaylı kriterlere göre arayabileceği ve keşfedebileceği akıllı bir sistemdir. Multi-tenant yapıdan bağımsız olarak tüm oteller üzerinde arama yapabilmesi sağlanacaktır.

Değerlendirme ve Yorum Sistemi Platformun güvenilirliğini ve şeffaflığını sağlayan, konaklama yapmış misafirlerin yorum ve puanlarını içerir.

Rezervasyon ve Fiyatlandırma Motoru Platformun ticari işlemlerinin ve en karmaşık iş mantığının yönetildiği çekirdek sistemdir. Oda müsaitliğinin ve dinamik fiyatlandırmanın her bir otelin envanterine özel olarak yönetilmesi kritik öneme sahiptir.

📈 Proje Fazları ve Geliştirme Stratejisi Projenin büyüklüğü ve staj sürecinin kısıtlı süresi göz önüne alınarak, özellikler mantıksal fazlara ayrılmıştır. 4 haftalık staj sürecinde Faz 1'in tamamlanması ana hedeftir. Bu fazlar, projenin nasıl aşamalar halinde geliştirileceğine dair bir yol haritası sunmaktadır.

FAZ 1: Minimum Uygulanabilir Ürün (MVP) - Staj Hedefi Bu aşama, platformun temel çekirdek işlevselliğini içerecek ve aşağıdaki özelliklere odaklanacaktır:

Çok Kiracılı Kullanıcı Sistemi: Misafir ve Otel Yöneticisi rolleriyle temel kayıt/giriş ve her otel yöneticisinin yalnızca kendi otel verisine erişebilmesi.

Temel Otel Yönetimi: Otel yöneticisinin kendi otelini, basit oda tiplerini ve temel geceleme fiyatını sisteme ekleyebilmesi.

Temel Arama Fonksiyonu: Misafirlerin konum ve tarihe göre tüm oteller arasında basit arama yapabilmesi.

Basit Rezervasyon Akışı: Bir misafirin seçtiği odaya temel bir rezervasyon yapabilme yeteneği.

Çekirdek Değerlendirme: Konaklama sonrası misafirlerin otellere puan/yorum bırakabilmesi.

FAZ 2: Gelişmiş Özellikler - Platform Olgunlaşması MVP'nin ötesinde, kullanıcı deneyimini ve platformun yeteneklerini genişletecek özellikler:

Gelişmiş filtreleme seçenekleri (imkanlara, yıldız sayısına, fiyat aralığına göre).

Favorilere otel ekleme ve kullanıcı profili detaylandırma.

Harita üzerinde otel konumlarının interaktif gösterimi.

Kural tabanlı dinamik fiyatlandırma motorunun tam entegrasyonu.

FAZ 3: Stratejik Vizyon - Gelecek Potansiyeli Uzun vadede platformu sektör liderliğine taşıyacak yenilikçi ve stratejik özellikler:

Akıllı otel karşılaştırma aracı ve kişiselleştirilmiş öneri motoru.

Fiyat takip ve alarm kurma özellikleri.

Otel yöneticileri için kapsamlı analitik ve raporlama paneli.

Promosyon kodu ve reklam modülleri.

Misafir-otel arası direkt mesajlaşma sistemi.

💻 Teknik Mimarî ve Yaklaşım Projenin teknik omurgası, dayanıklılık, ölçeklenebilirlik ve performans göz önünde bulundurularak belirlenmiştir. Backend-First yaklaşımıyla, tüm iş mantığını barındıran güçlü bir API altyapısı oluşturulacaktır.

Teknoloji Yığını (Tech Stack) Frontend: Angular

Tek sayfa uygulama (SPA) mimarisiyle dinamik ve hızlı bir kullanıcı deneyimi sunma.

TypeScript'in sağladığı güçlü tip denetimi ve geliştirme verimliliği.

Backend: Node.js (Express.js)

Yüksek performanslı, eşzamansız ve ölçeklenebilir RESTful API'ler oluşturmak için tercih.

Kimlik doğrulama ve yetkilendirme için JWT (JSON Web Tokens) kullanımı.

Temel Kütüphaneler: Veritabanı etkileşimi için pg (veya ORM), güvenlik için bcryptjs, JWT için jsonwebtoken, CORS politikası yönetimi için cors, ortam değişkenleri için dotenv.

Veritabanı: PostgreSQL

İlişkisel veri tabanı yapısı sayesinde multi-tenant verilerin tutarlı ve güvenli bir şekilde depolanması için ideal.

Yüksek performans ve güvenilirlik.

Veritabanı etkileşimini kolaylaştırmak için ORM (Object-Relational Mapping) araçları (örneğin Sequelize veya TypeORM) kullanılacaktır.
