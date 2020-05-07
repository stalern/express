# express

* 本项目是本期某课程大作业，我负责Web端
* 使用Vue Cli3.0+完成
* Web的后台也是我写的，由于特殊原因源码请参考[Gitee/王星星](https://gitee.com/LSLWIND/aladdin-web)

### 功能列表

### 待办
1. 前后台接口打通 √
2. 权限认证 √
3. 根据code判断异常（后台的路由规则没有完全利用好）
4. 将性别和状态转换为数字
5. 通过人查快递 √
6. 使用自动驾驶规划描绘出历史位置
7. 增加网点 √
8. 拿到员工数量 √
9. 用户，包裹，快递没有删除接口
10. 生成和打印订单

### Bug修复
1. admin界面，菜单按钮不能变为disable状态   `/components/layout/AppHeader.vue`
2. 地图的adcode不确定 √
3. 录入员工时需要先点击“取消”
5. 把快件的二维码写死了(需要增加controller的一个方法) √
6. input框没有判空处理
7. 删除员工时，如果为别的包裹负责人怎么办
8. 多个查询的分页处理 √
9. 登录登出的router写的不好
10. 地图的自动定位

### 运行后台

`C:\Program Files\Java\jdk1.8.0_231\bin\java.exe" -XX:TieredStopAtLevel=1 -noverify -Dspring.output.ansi.enabled=always -Dcom.sun.management.jmxremote -Dspring.jmx.enabled=true -Dspring.liveBeansView.mbeanDomain -Dspring.application.admin.enabled=true "-javaagent:C:\Program Files\JetBrains\IntelliJ IDEA 2019.2.4\lib\idea_rt.jar=7450:C:\Program Files\JetBrains\IntelliJ IDEA 2019.2.4\bin" -Dfile.encoding=UTF-8 -classpath "C:\Program Files\Java\jdk1.8.0_231\jre\lib\charsets.jar;C:\Program Files\Java\jdk1.8.0_231\jre\lib\deploy.jar;C:\Program Files\Java\jdk1.8.0_231\jre\lib\ext\access-bridge-64.jar;C:\Program Files\Java\jdk1.8.0_231\jre\lib\ext\cldrdata.jar;C:\Program Files\Java\jdk1.8.0_231\jre\lib\ext\dnsns.jar;C:\Program Files\Java\jdk1.8.0_231\jre\lib\ext\jaccess.jar;C:\Program Files\Java\jdk1.8.0_231\jre\lib\ext\jfxrt.jar;C:\Program Files\Java\jdk1.8.0_231\jre\lib\ext\localedata.jar;C:\Program Files\Java\jdk1.8.0_231\jre\lib\ext\nashorn.jar;C:\Program Files\Java\jdk1.8.0_231\jre\lib\ext\sunec.jar;C:\Program Files\Java\jdk1.8.0_231\jre\lib\ext\sunjce_provider.jar;C:\Program Files\Java\jdk1.8.0_231\jre\lib\ext\sunmscapi.jar;C:\Program Files\Java\jdk1.8.0_231\jre\lib\ext\sunpkcs11.jar;C:\Program Files\Java\jdk1.8.0_231\jre\lib\ext\zipfs.jar;C:\Program Files\Java\jdk1.8.0_231\jre\lib\javaws.jar;C:\Program Files\Java\jdk1.8.0_231\jre\lib\jce.jar;C:\Program Files\Java\jdk1.8.0_231\jre\lib\jfr.jar;C:\Program Files\Java\jdk1.8.0_231\jre\lib\jfxswt.jar;C:\Program Files\Java\jdk1.8.0_231\jre\lib\jsse.jar;C:\Program Files\Java\jdk1.8.0_231\jre\lib\management-agent.jar;C:\Program Files\Java\jdk1.8.0_231\jre\lib\plugin.jar;C:\Program Files\Java\jdk1.8.0_231\jre\lib\resources.jar;C:\Program Files\Java\jdk1.8.0_231\jre\lib\rt.jar;D:\Codes\Java\IdeaProjects\aladdin-web\target\classes;D:\Codes\Java\maven\net\sf\barcode4j\barcode4j\2.1\barcode4j-2.1.jar;D:\Codes\Java\maven\avalon-framework\avalon-framework-impl\4.2.0\avalon-framework-impl-4.2.0.jar;D:\Codes\Java\maven\commons-cli\commons-cli\1.0\commons-cli-1.0.jar;D:\Codes\Java\maven\commons-logging\commons-logging\1.0\commons-logging-1.0.jar;D:\Codes\Java\maven\commons-lang\commons-lang\1.0\commons-lang-1.0.jar;D:\Codes\Java\maven\junit\junit\4.12\junit-4.12.jar;D:\Codes\Java\maven\org\hamcrest\hamcrest-core\2.1\hamcrest-core-2.1.jar;D:\Codes\Java\maven\org\apache\ant\ant\1.7.1\ant-1.7.1.jar;D:\Codes\Java\maven\org\apache\ant\ant-launcher\1.7.1\ant-launcher-1.7.1.jar;D:\Codes\Java\maven\org\springframework\boot\spring-boot-starter-data-jdbc\2.2.6.RELEASE\spring-boot-starter-data-jdbc-2.2.6.RELEASE.jar;D:\Codes\Java\maven\org\springframework\data\spring-data-jdbc\1.1.6.RELEASE\spring-data-jdbc-1.1.6.RELEASE.jar;D:\Codes\Java\maven\org\springframework\data\spring-data-relational\1.1.6.RELEASE\spring-data-relational-1.1.6.RELEASE.jar;D:\Codes\Java\maven\org\springframework\data\spring-data-commons\2.2.6.RELEASE\spring-data-commons-2.2.6.RELEASE.jar;D:\Codes\Java\maven\org\springframework\spring-tx\5.2.5.RELEASE\spring-tx-5.2.5.RELEASE.jar;D:\Codes\Java\maven\org\springframework\spring-context\5.2.5.RELEASE\spring-context-5.2.5.RELEASE.jar;D:\Codes\Java\maven\org\springframework\spring-beans\5.2.5.RELEASE\spring-beans-5.2.5.RELEASE.jar;D:\Codes\Java\maven\org\slf4j\slf4j-api\1.7.30\slf4j-api-1.7.30.jar;D:\Codes\Java\maven\org\springframework\boot\spring-boot-starter-data-jpa\2.2.6.RELEASE\spring-boot-starter-data-jpa-2.2.6.RELEASE.jar;D:\Codes\Java\maven\org\springframework\boot\spring-boot-starter-aop\2.2.6.RELEASE\spring-boot-starter-aop-2.2.6.RELEASE.jar;D:\Codes\Java\maven\org\springframework\spring-aop\5.2.5.RELEASE\spring-aop-5.2.5.RELEASE.jar;D:\Codes\Java\maven\org\aspectj\aspectjweaver\1.9.5\aspectjweaver-1.9.5.jar;D:\Codes\Java\maven\jakarta\activation\jakarta.activation-api\1.2.2\jakarta.activation-api-1.2.2.jar;D:\Codes\Java\maven\jakarta\persistence\jakarta.persistence-api\2.2.3\jakarta.persistence-api-2.2.3.jar;D:\Codes\Java\maven\jakarta\transaction\jakarta.transaction-api\1.3.3\jakarta.transaction-api-1.3.3.jar;D:\Codes\Java\maven\org\hibernate\hibernate-core\5.4.12.Final\hibernate-core-5.4.12.Final.jar;D:\Codes\Java\maven\org\jboss\logging\jboss-logging\3.4.1.Final\jboss-logging-3.4.1.Final.jar;D:\Codes\Java\maven\org\javassist\javassist\3.24.0-GA\javassist-3.24.0-GA.jar;D:\Codes\Java\maven\net\bytebuddy\byte-buddy\1.10.8\byte-buddy-1.10.8.jar;D:\Codes\Java\maven\antlr\antlr\2.7.7\antlr-2.7.7.jar;D:\Codes\Java\maven\org\jboss\jandex\2.1.1.Final\jandex-2.1.1.Final.jar;D:\Codes\Java\maven\com\fasterxml\classmate\1.5.1\classmate-1.5.1.jar;D:\Codes\Java\maven\org\dom4j\dom4j\2.1.1\dom4j-2.1.1.jar;D:\Codes\Java\maven\org\hibernate\common\hibernate-commons-annotations\5.1.0.Final\hibernate-commons-annotations-5.1.0.Final.jar;D:\Codes\Java\maven\org\glassfish\jaxb\jaxb-runtime\2.3.2\jaxb-runtime-2.3.2.jar;D:\Codes\Java\maven\org\glassfish\jaxb\txw2\2.3.2\txw2-2.3.2.jar;D:\Codes\Java\maven\com\sun\istack\istack-commons-runtime\3.0.8\istack-commons-runtime-3.0.8.jar;D:\Codes\Java\maven\org\jvnet\staxex\stax-ex\1.8.1\stax-ex-1.8.1.jar;D:\Codes\Java\maven\com\sun\xml\fastinfoset\FastInfoset\1.2.16\FastInfoset-1.2.16.jar;D:\Codes\Java\maven\org\springframework\data\spring-data-jpa\2.2.6.RELEASE\spring-data-jpa-2.2.6.RELEASE.jar;D:\Codes\Java\maven\org\springframework\spring-orm\5.2.5.RELEASE\spring-orm-5.2.5.RELEASE.jar;D:\Codes\Java\maven\org\springframework\spring-aspects\5.2.5.RELEASE\spring-aspects-5.2.5.RELEASE.jar;D:\Codes\Java\maven\org\springframework\boot\spring-boot-starter-jdbc\2.2.6.RELEASE\spring-boot-starter-jdbc-2.2.6.RELEASE.jar;D:\Codes\Java\maven\org\springframework\boot\spring-boot-starter\2.2.6.RELEASE\spring-boot-starter-2.2.6.RELEASE.jar;D:\Codes\Java\maven\org\springframework\boot\spring-boot\2.2.6.RELEASE\spring-boot-2.2.6.RELEASE.jar;D:\Codes\Java\maven\org\springframework\boot\spring-boot-autoconfigure\2.2.6.RELEASE\spring-boot-autoconfigure-2.2.6.RELEASE.jar;D:\Codes\Java\maven\org\springframework\boot\spring-boot-starter-logging\2.2.6.RELEASE\spring-boot-starter-logging-2.2.6.RELEASE.jar;D:\Codes\Java\maven\ch\qos\logback\logback-classic\1.2.3\logback-classic-1.2.3.jar;D:\Codes\Java\maven\ch\qos\logback\logback-core\1.2.3\logback-core-1.2.3.jar;D:\Codes\Java\maven\org\apache\logging\log4j\log4j-to-slf4j\2.12.1\log4j-to-slf4j-2.12.1.jar;D:\Codes\Java\maven\org\apache\logging\log4j\log4j-api\2.12.1\log4j-api-2.12.1.jar;D:\Codes\Java\maven\org\slf4j\jul-to-slf4j\1.7.30\jul-to-slf4j-1.7.30.jar;D:\Codes\Java\maven\jakarta\annotation\jakarta.annotation-api\1.3.5\jakarta.annotation-api-1.3.5.jar;D:\Codes\Java\maven\org\yaml\snakeyaml\1.25\snakeyaml-1.25.jar;D:\Codes\Java\maven\com\zaxxer\HikariCP\3.4.2\HikariCP-3.4.2.jar;D:\Codes\Java\maven\org\springframework\spring-jdbc\5.2.5.RELEASE\spring-jdbc-5.2.5.RELEASE.jar;D:\Codes\Java\maven\org\springframework\boot\spring-boot-starter-web\2.2.6.RELEASE\spring-boot-starter-web-2.2.6.RELEASE.jar;D:\Codes\Java\maven\org\springframework\boot\spring-boot-starter-json\2.2.6.RELEASE\spring-boot-starter-json-2.2.6.RELEASE.jar;D:\Codes\Java\maven\com\fasterxml\jackson\core\jackson-databind\2.10.3\jackson-databind-2.10.3.jar;D:\Codes\Java\maven\com\fasterxml\jackson\core\jackson-annotations\2.10.3\jackson-annotations-2.10.3.jar;D:\Codes\Java\maven\com\fasterxml\jackson\core\jackson-core\2.10.3\jackson-core-2.10.3.jar;D:\Codes\Java\maven\com\fasterxml\jackson\datatype\jackson-datatype-jdk8\2.10.3\jackson-datatype-jdk8-2.10.3.jar;D:\Codes\Java\maven\com\fasterxml\jackson\datatype\jackson-datatype-jsr310\2.10.3\jackson-datatype-jsr310-2.10.3.jar;D:\Codes\Java\maven\com\fasterxml\jackson\module\jackson-module-parameter-names\2.10.3\jackson-module-parameter-names-2.10.3.jar;D:\Codes\Java\maven\org\springframework\boot\spring-boot-starter-tomcat\2.2.6.RELEASE\spring-boot-starter-tomcat-2.2.6.RELEASE.jar;D:\Codes\Java\maven\org\apache\tomcat\embed\tomcat-embed-core\9.0.33\tomcat-embed-core-9.0.33.jar;D:\Codes\Java\maven\org\apache\tomcat\embed\tomcat-embed-el\9.0.33\tomcat-embed-el-9.0.33.jar;D:\Codes\Java\maven\org\apache\tomcat\embed\tomcat-embed-websocket\9.0.33\tomcat-embed-websocket-9.0.33.jar;D:\Codes\Java\maven\org\springframework\boot\spring-boot-starter-validation\2.2.6.RELEASE\spring-boot-starter-validation-2.2.6.RELEASE.jar;D:\Codes\Java\maven\jakarta\validation\jakarta.validation-api\2.0.2\jakarta.validation-api-2.0.2.jar;D:\Codes\Java\maven\org\hibernate\validator\hibernate-validator\6.0.18.Final\hibernate-validator-6.0.18.Final.jar;D:\Codes\Java\maven\org\springframework\spring-web\5.2.5.RELEASE\spring-web-5.2.5.RELEASE.jar;D:\Codes\Java\maven\org\springframework\spring-webmvc\5.2.5.RELEASE\spring-webmvc-5.2.5.RELEASE.jar;D:\Codes\Java\maven\org\springframework\spring-expression\5.2.5.RELEASE\spring-expression-5.2.5.RELEASE.jar;D:\Codes\Java\maven\javax\validation\validation-api\2.0.1.Final\validation-api-2.0.1.Final.jar;D:\Codes\Java\maven\mysql\mysql-connector-java\8.0.19\mysql-connector-java-8.0.19.jar;D:\Codes\Java\maven\org\projectlombok\lombok\1.18.8\lombok-1.18.8.jar;D:\Codes\Java\maven\jakarta\xml\bind\jakarta.xml.bind-api\2.3.3\jakarta.xml.bind-api-2.3.3.jar;D:\Codes\Java\maven\org\hamcrest\hamcrest\2.1\hamcrest-2.1.jar;D:\Codes\Java\maven\org\springframework\spring-core\5.2.5.RELEASE\spring-core-5.2.5.RELEASE.jar;D:\Codes\Java\maven\org\springframework\spring-jcl\5.2.5.RELEASE\spring-jcl-5.2.5.RELEASE.jar" org.phoenix.aladdinweb.AladdinWebApplication
`

