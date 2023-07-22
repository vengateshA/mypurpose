import zeweld from '../images/zeweld.jpeg'
import zweldmet from '../images/zweldmet.jpeg'

const Product_data = [
{

    common_name : 'Smart Welding Helmets',
    basic : 'ZWELDMET Basic',
    prime : 'ZWELDMET Prime',
    Pro : 'ZWELDMET Pro',
    basic_desc :'It is a product comes with a patented camera and low latency display system wherein the welder will see the video and weld instead of seeing the welding through lens. The display system will also have critical welding parameters with no indication.',
    prime_desc :'It has all the features of basic version additionally it has AI system assess the critical welding parameters, event alert system, welding path guidance system. ',
    pro_desc :'It has all the facilities of Prime with additional sensor noise dose and fume exposure indicator to protect the workers from the excessive noise and fume exposure and comply with occupational safety and health. ',
    main_desc:'ZWELDMET is a custom designed welders’ helmet integrated with camera and display technologies to stream low latency video in the helmet, thereby the welder see both the object and electrode and efficiently weld. Our Machine vision camera enabled with AI generates the path and guides the welder for seamless welding operation.  The critical welding parameters, voltage, current, gas flow rate, wire feed rate, traverse speed, stick out, weaving amplitude are fetched from the machine and other sensors will be displayed on the screen. Based on the welding conditions, if any critical welding parameter crosses the limit, our AI system will indicate the welder by changing the entire display colour and also indicate which parameter is our of range and immediate corrective action can be taken. It uses multiple sensors to detect the parameters and all the events will be logged in cloud with clear time stamp and can be accessed from anywhere. '

},
{
    
    common_name : 'Welding Iot',
    basic : 'ZWELDAQ Basic',
    prime : 'ZWELDAQ Premium',
    pro : 'ZWELDAQ Pro ',
    basic_desc:'A small device enabled with WiFi connectivity measures, current and voltage, and give option for job card, worker details, etc. The data of machine utilisation, current, voltage and corresponding worker details are stored in cloud for future access.',
    prime_desc:'This product has all the features of basic with additional data of wire federate, gas flow rate are logged.',
    pro_desc:'This has all the features of Prime with AI technology on fault/defect  identification technology. The common defects which include penetration depth, blow holes, spatter, bead profile are logged as events for each job card. ',
    main_desc: 'Data on critical welding parameters are very essential to analyse the welding and welders performance. Developing a such IoT device for welding machine are not very common due to their portability and high current problems. IoT devices are only provided by OEM on select models which are very expensive. We provide a cost effective IoT solution for welding IoT integrated with AI for online weldment quality assessment. Our device can be integrated with any welding machine with very simple arrangements. '
},

{
    common_name : 'Training System',
    basic : 'ZWELD VR Basic',
    prime : 'ZWELD Vr Premium',

    basic_desc:'Our custom made VR training module which is completely gamified to make the youngsters to play and learn welding. Although it is not an alternate of using real world training, it supplements the real world training and possibly reduce the time required in training. The basic version has VR training modules with necessary hardware can be communicated with any good VR -head gear. The levels of training is limited to MiG and few types of welding alone. ',
    prime_desc:'A complete range of welding training with all possible welding conditions and material usage are provided on top of basic version. ',
  main_desc: 'Training of welders is very expensive due to excessive use of consumables and pose threat for health and safety. It is very essential to take all precautions prior to training. Conventional mode of skilling of Zee generation in welding is challenging and convince them to pursue in this field. A more sophisticated training system which rewards the people may attract youngsters to get trained in this field.'
}      

]
export default Product_data;