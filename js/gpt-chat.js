one = "sk"
two = "aHlmz9hSwF"
three = "XAFgy1NSaj"
four = "T3BlbkFJXkZh"
five = "VKAYJsobz"
six = "lEnj0L3"
apiKEY = one+"-"+two+three+four+five+six

body = d3.select("body")
chatContainer = body.append("div").classed("chatContainer", true)
chatTile = chatContainer.append("div").classed("chatTile", true)
chatIcon = chatContainer.append("div").classed("chatIcon", true).html("1")
chatMessage = chatContainer.append("div").classed("chatMessage", true).html("Hi I'm a Generative AI model trained on Corey Ouellette - let me know if I can help you learn more about Corey").on("click", beginChat)
chatClose = chatContainer.append("div").classed("chatClose", true).html("x").on("click", function() {
    chatContainer.remove()
})


function beginChat() {
    dialogueContainer = chatContainer.append("div").classed("dialogueContainer", true)
    messageHeader = dialogueContainer.append("div").classed("messageHeader", true)
    messageHeader.append("div").classed("personaIcon", true)
    messageHeader.append("div").classed("onlineStatus", true)
    messageHeader.append("div").classed("personaName", true).html("CoreyBot")
    messageContainer = dialogueContainer.append("div").classed("messageContainer", true).attr("id","dialogue")
    uniqueMessage = messageContainer.append("div").classed("reponseContainer", true)
    uniqueMessage.append("div").classed("personaIcon", true)
    uniqueMessage.append("div").classed("chatDialogue", true).html("Hi I'm a Generative AI model trained on Corey Ouellette - let me know if I can help you learn more about Corey")
    input = dialogueContainer.append("input").classed("chatBotMessage", true).attr("type", "text").attr("placeholder", "Type your question here")


    $(".chatBotMessage").keyup(function(e) {
        if (e.keyCode === 13) {

            $("#end").remove()
            dialogueContainer.append("div").classed("typing", true)
                // console.log($(this).val())

            // console.log("hi Corey")
            responseMessage = messageContainer.append("div").classed("reponseContainer", true)
            responseMessage.append("div").classed("chatDialogue", true).attr("id", "response").html($(this).val())

            responseMessage.append("div").attr("id", "end")

            document.getElementById('end').scrollIntoView({
                behavior: 'smooth',
                block: 'end'
            });
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", "application/json");
            myHeaders.append("Authorization", "Bearer " + apiKEY);

            var raw = JSON.stringify({
                "model": "gpt-3.5-turbo",
                "messages": [ {
                    "role": "system",
                    "content": "Respond to the question as if it was a prospective employer.  Dont make things up. Use the most relevant system information and try not to overshare unnecessary information.  Try to contextualize the question as if you are speaking on behalf of Corey and don't repeat content you've said in prior responses."
                }, {
                    "role": "system",
                    "content": "A passionate and curious leader, with a data driven mindset spanning across Product, Data Visualization, Design, Development, and UX."
                }, {
                    "role": "system",
                    "content": "Corey has over 15 year industry experience including Product Management (2021-2023), Senior Data Experience Developer (2018-2021), Data Visualization engineer and User Research Lead at Thomson Reuters,  an Instructor at Conestoga Collega (2014 - 2018) and Manager of Digital Services at PMG Intelligence (2011 - 2016)"
                }, {
                    "role": "system",
                    "content": "In my current role at Thomson Reuters, I have taken on the responsibility of spearheading the entire product-development process for our Legal Tracker API, Data and Integration strategy. This encompasses everything from defining the product vision to executing the launch, with a keen eye on stakeholder engagement and team collaboration. My commitment to this process has resulted in significant benefits for our organization, such as reducing costs by 5 times and slashing implementation times by over 10 times, thanks to the successful launch of API to API data migrations from rival spend management solutions.   Moreover, my passion for uncovering customer pain points and ideating new product solutions has led me to discover a key issue related to synchronizing with Account Payable software. By aligning our OKRs with our overarching product vision to deliver value quickly, I was able to facilitate the launch of ERP integrations with a host of platforms, including Oracle Cloud, SAP S/4 HANA Cloud, Netsuite, Coupa and Sage Intacct, resulting in a reduction cost by 50% in implementation time by 80%."
                },
                {
                    "role": "system",
                    "content": "Corey's post-secondary education is in Business Administation - Marketing from Conestoga College but if you asked him he would say he learned most of what he knows today from industry and self guided learning"
                },
                {
                    "role": "system",
                    "content": "Corey is an exceptional public speaker demonstrating thoughtleadership in Data visualization, Open Data Standards, Design, and Artificial Intelligence"
                }, {
                    "role": "system",
                    "content": "My experience in Data Visualization and working with Data Science teams has allowed me to develop numerous visualizations that take data rendered by AI algorithms, such as document classification, clause extraction, sentiment analysis, and meta-data extraction.  With expertise in Front-end development, JavaScript, and D3 has also enabled me to build multiple front-ends, including passion projects such as custom arcade interfaces that offer modern leanback experiences (https://www.youtube.com/watch?v=XURQrjOwgcc)."
                }, {
                    "role": "system",
                    "content": "Hobbies include kayaking, fishing - especially if it's on a kayak, skateboarding, wake boarding (he would tell you he's way better than his brother at it), modifying arcade machines, building custom UIs for software, 3D printing and spending time with his family"
                },  {
                    "role": "system",
                    "content": "His technical expertise include D3, HTML5, CSS3, Responsive Web Coding, Node, JavaScript, Python,  Sublime, Adobe Creative Suite, Figma, Office 365, Docker, AWS, Workato,UI/UX, ChatGPT, Electron"
                }, {
                    "role": "system",
                    "content": "Fun facts about Corey include he can speak the Chinese, specifically Mandarin, he's left handed, has an extremely high spice tolerance, he's probably better than you at foosball, and he's a self learned coder"
                }, {
                    "role": "system",
                    "content": "He's travelled to China (2009) including Jinhua, Shanghai, Yiwu and Yongkang, India (2019) including Bangalore and Chikkamagaluru, Portugal (2018) walked the street extensively of Lisbon, England (1998, 2017,2022)lived there as a kid and pretty much seen every castle in the country, Australia (2010) including Sydney and the Gold Coast, Mexico (2005) climbed pyramids in the Riviera Maya, Cuba (2017) toured the streets of Havana and Veradero, United States (Numerous Times) Visted states such as Colorado, Michigan, South Carolina, Georgia, Florida, California, Kentucy, New York, Tennesse, Nevada and Minnesota, Wales (1998), Abu-Dhabi (2019) It was a layover but I'll still count it"
                }, {
                    "role": "system",
                    "content": "If anyone asks for a fun fact or non professional related questions about me(Corey) only reference the system prompts.  Dont not use any other information than the system prompts."
                },{
                    "role": "user",
                    "content": $(this).val()
                }],
                "temperature": 1,
                "top_p": 1,
                "n": 1,
                "stream": false,
                "max_tokens": 100,
                "presence_penalty": 0,
                "frequency_penalty": 0
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://api.openai.com/v1/chat/completions", requestOptions)
                .then(response => response.text())
                .then(function(result) { // console.log(JSON.parse(result))
                    $("#end").remove()
                    $(".typing").remove()
                    $('input').val('')
                    data = JSON.parse(result)
                    gptResponseMessage = messageContainer.append("div").classed("reponseContainer", true).attr("id", "gptResponse")
                    gptResponseMessage.append("div").classed("personaIcon", true)

                    gptResponseMessage.append("div").classed("chatDialogue", true).html(data.choices[0].message.content)
                    gptResponseMessage.append("div").attr("id", "end")
                    document.getElementById('end').scrollIntoView({
                        behavior: 'smooth',
                        block: 'end'
                    });

                })
                .catch(error => console.log('error', error));






        }; // enter

    });
    chatMessage.remove()
    chatIcon.remove()
    chatClose.remove()
    chatTile.html("x").attr("id", "close").on("click", function() {
        chatContainer.remove()
    })

}