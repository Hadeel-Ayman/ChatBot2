import puase from '../assets/images/puase.png'
import music from '../assets/images/music.png';
import run from '../assets/images/run.png'
import img2 from '../assets/images/img2.png'
import check from '../assets/images/check1.png'
import falsee from '../assets/images/false.png'
import service1 from "../assets/images/service1.svg"
import service2 from "../assets/images/service2.svg"
import service3 from "../assets/images/service3.svg"

const arr = [
    'توجب عليك الاطلاع والموافقة على هذه الشروط قبل التعامل معنا',
    'ان كنت تعترض علي اي بند من هذه الشروط فلا يمكنك التسجيل معنا و لا يمكنك الاستفادة من خدماتنا و يجب مغادرتك للموقع الان',
    'عضويتك ماهي الا تصريح من الادارة لأستخدامك الموقع من خلال حسابك عليه و يمكن للادارة سحب هذا التصريح في اي وقت حالة خالفت شروط الموقع او سياسات الاستخدام وذلك دون اي تعويضات مادية او معنوية و دون ادني مسئولية علي الموقع او ادارته',
    'لا توجد سياسة استرجاع الاموال في كل الحالات',
    'يتحمل المستخدم المسؤلية الكاملة والقانونية عن اي اعمال يقوم بها بالاستعانة بخدمات الموقع او الشركة',
    'توجب عليك الاطلاع والموافقة على هذه الشروط قبل التعامل معنا',
    'من حق الادارة تحديث الخدمة بالطريقة التي تراها مناسبة وليس من حق اي مستخدم الاعتراض على التحديثات او سياسات الشركة او التدخل في امورها',
    'من حق الشركة تجميد عضوية اي مستخدم يتسبب في اي اضرار مادية او معنوية لها والادارة فقط هي من تقرر الاجراءات اللازمة في هذه الامور',
    'التسجيل مجانا في الموقع لفترة محدوده فقط يحق للادارة الغاءة في اي وقت',
    'الادارة غير مسئوله علي عدم قراءتك لسياسات الموقع فعند تسجيلك للموقع تقوم بالموافقه عليها',
    'الادارة غير مسئولة نهائيا عن سوء استخدام الموقع للخدمات المتاحه',
    'في حالة قيام الشركات بعمل تحديثات لا يمكن مواكبتها يتم ايقاف الخدمة',
    'غير مسؤولين عن استخدام ارقامك الشخصية وحظرة من خلال عمليات الارسال',
]

const IQData = [
    {
        name: 'شمس حسان',
        job: 'UXUI Designer',
        src: puase,
        music: music
    },
    {
        name: 'شمس حسان',
        job: 'UXUI Designer',
        src: puase,
        music: music
    }, {
        name: 'شمس حسان',
        job: 'UXUI Designer',
        src: puase,
        music: music
    },
    {
        name: 'أحمد صباغ',
        job: 'Graphic Designer',
        src: run,
        music: img2
    },
    {
        name: 'ايمان السويركي',
        job: 'Graphic Designer',
        src: puase,
        music: music
    },
    {
        name: 'رندة ابو سويرح',
        job: 'UXUI Designer',
        src: puase,
        music: music
    },
]

const pricing = [
    {
        desc: 'هنا مثال على خدمة من الشركة للزبون',
        img: check
    },
    {
        desc: 'هنا مثال على خدمة من الشركة للزبون',
        img: check
    },
    {
        desc: 'هنا مثال على خدمة من الشركة للزبون',
        img: check
    },
    {
        desc: 'هنا مثال على خدمة من الشركة للزبون',
        img: check
    },
    {
        desc: 'هنا مثال على خدمة من الشركة للزبون',
        img: check
    },
    {
        desc: 'هنا مثال على خدمة من الشركة للزبون',
        img: falsee
    },
]


const data = [
    {
        id: 1,
        Image: service3,
        title: "الرد التلقائي على العملاء",
        description: "يمكنك إنشاء استجابة تلقائية للعملاء أو رسالة ترحيب في النص أو الصورة أو الفيديو."

    },
    {
        id: 2,
        Image: service2,
        title: "روبوت الدردشة واتساب",
        description: "يمكنك الآن إنشاء روبوت دردشة كامل على WhatsApp مع الكلمات الرئيسية والرد على جميع استفسارات عملائك في الرسائل النصية أو الصور أو الفيديو."
    },
    {
        id: 3,
        Image: service1,
        title: "ارسال الحملات الترويجية",
        description: "يمكنك إرسال آلاف الحملات الترويجية بسهولة شديدة باستخدام WhatsApp Bot بنقرة واحدة."
    }
]

export { arr, IQData, pricing, data }