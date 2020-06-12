De score service gebruikt de meegeleverde restheart API om data op te slaan op MongoDB (cluster i.d. cloud). 

Zet de API aan door een cmd prompt te open op de folder wetransfer-ebf2ca en voer het volgende in:
java -jar restheart.jar etc/restheart.yml -e etc/default.properties

Nu kan je zodra het klaar is met laden op enter klikken en de API is benaderbaar op localhost:8080.

De rest API draait op java 11.
