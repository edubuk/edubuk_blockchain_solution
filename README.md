# edubuk_blockchain_solution

# EDUBUK: Immutable & Verifiable "Digital Record of Learning and Experience" on the Blockchain.

# Problem in the Current Education System:

•	Our Current Education System Makes each student go through the exact same syllabus & curriculum, make them appear for the exact same tests to compete for a Letter Grade A!
•	Despite of the fact that Different students have Different Brains; Different Strength; Different Passion; Different Talent; Different Dreams & Different Calibre:
•	Graduates are not “trained in a relevant manner” as per the needs of the employers.
•	There is a huge gap that exists between skills acquired in educational institutes & the skills requirement of the dynamically changing job-market.
•	Lack of Holistic Education, Talent Recognition & Passion-Based Learning Approach. Not much emphasis is given on extracurricular skill development which can lead to successful unconventional career paths like being a Choreographer, Singer, Dancer, Photographer, Writer, Actor, Artists, Painter, Sportsperson etc.
•	No Trustworthy source to verify the learning, skillsets & degree(s) acquired. Current 3rd party verification services are time taking & costly for the employers

# Blockchain Part of our Solution: 

Create Your Digital Edubuk Profile, Verifiable on the Blockchain:

•	We are using IBM Hyperledger Fabric for creating our Solution. We are using node.js environment, JavaScript & angular-JS. 
•	There are 6 Relevant Organizations (& Peers within them) on the network as mentioned below:

1.	Universities and schools will be having their own private key, capable to issue & verify certificates as well. The issued certificates will be signed digitally using cryptography and is linked with the hash of university/school or its appropriate Regulatory Authority to authenticate it.

2.	College or School Students or Employees will be on the blockchain as well and they will be recipient of the education certificates, Marks-sheets and work-experience certificates. Additionally, having power to hide a particular certificate if not desired by them. Students & employees will be having their own profiles linked to their credentials on the blockchain with hashes.

3.	Regulatory Authorities like AICTE, UGC, MHRD, CBSE, ICSE, State Government Education Boards will also be a part of the chain. Certificates that these bodies issue to schools should be signed digitally using cryptography and should link with the hash of the "relevant governing body" to authenticate it.

4.	One central regulatory authority like MHRD or as selected as the representative by the Consortium will be there as an Ordering Service Node for maintaining consensus among peers in Blockchain Network.

5.	Employers are also on the blockchain to verify the credentials like Certificates, Marksheets of the students or professionals and their Professional Work Experience as well.

6.	Lastly, we have 3rd Party Verification Bodies as the service providers who verify the claims of the professionals on the CV that they give to the employers.

All Relevant Stakeholders are connected through relevant channel(s) on the Hyperledger Fabric and will have "write" & "read" permissions ONLY to the extent it is required. Basically, all the stakeholders will read different parts of the blockchain and will be able to "write" on different parts of the blockchain, that is ONLY relevant to them.

# Benefits for all Stakeholders:

1)	Student's certificates and mark sheets are stored in the database in different file formats like PDF, DOC, JPEG, PNG, TIFF, XLS etc. linked to the blockchain via hashes in an immutable & verifiable form.

2)	Employees and Professionals also can store their Work Experience Certificates in a file format agnostic manner on the blockchain network and get it verified digitally & store it immutably on the blockchain.

3)	Use of Data Analytics & Machine Learning algorithms to do relevant predictive analysis from the data coming on the blockchain network.

4)	Reduce Time & Costs associated with Verification of documents and Pre-Employment Background Checks.

5)	Employers get most-relevant profiles of prospective employees for interviews which reduces costs and time of Screening CVs.

6)	Additional demand for Online Learning Platforms like UpGrad, Toppr, Udemy, Unacademy etc. for new customized courses leading to new revenue drivers.

7)	Immutable Record of Teaching Services and Credentials for the teachers & professors having their profile on the Edubuk platform.

# Competitive Advantage (USP):
•	Focus on “Individualized Learning” in–sync with Learner’s Intelligence Type, Interests & Passion with the use of “Customized Learning Plan” to make him “Job-Ready”.
•	Learner acquires “Only Relevant Skills” using “Online-Cum-Offline” Learning Medium Options.
•	First of its kind “Centralized, Verifiable and Trustworthy” Platform which also provides “Earning while Learning” Opportunities with the relevant use of A.I. M.L. & Blockchain Technology.
•	Focus on Less Explored Unconventional Career Paths like being a dancer, musician, singer, artist, sportsperson, actor, painter etc. or pursue these interests & passion as a hobby, on a serious note.

# If we can have Customized LinkedIn Profiles, Customized Facebook Pages, why cannot we create a Customized Learning Profile i.e. EDUBUK 


# Stakeholders to be Involved as Participants on the Blockchain:

1.) Universities & Schools: This stakeholder should be verified with its own private key and is capable to Issue Certificates & Verify Certificates as well. Certificates should be signed digitally using cryptography and should link with the hash of the university/school to authenticate it.

2.) Students: College or School Students should be on the blockchain as well and they will be recipient of the certificates & Marks-sheets. With the additional power of requesting the chain to remove a particular certificate if not desired by the student. Student should have their own profiles in a database linked to the blockchain with hashes. Also, the student's once he requests to remove or disown a certificate on his name, he should be allowed to do that and his previous profile block should change (after approval) and the new/updated profile block (with the use of updated hash) should come on the blockchain with student's updated details.

3.) Regulatory Authorities: AICTE, UGC, MHRD, CBSE, ICSE, ICGSE, State Government Education Boards should be a part of the chain (and these can be added at different points in time as well, in future). But keep a procedure to add them and they should also be capable to issue Certificates to Universities to approve them (the License for colleges & Universities to operate are issued by these AICTE, UGC). This is a very important and innovative use case to have these "governing bodies" on the blockchain as well.  Certificates that these bodies issue to schools (affiliation with CBSE or ICSE)/universities (Affiliation with Osmania or Central Government University or AICTE or Open Board etc.) should be signed digitally using cryptography and should link with the hash of the "relevant governing body" to authenticate it.

4.) Employers: Employers should be a part of the blockchain too. They should be able to verify the credentials (certificates, marksheets) etc of the students or professionals and their professional work experience as well. Once one employer certifies and signs cryptographically (using a private key & hash etc) that any person has been employed with them for this time to this time, then that information should be stored in the database linked to the blockchain and then any other employer should be able to see & use that information too. Basically using the student's profile or professional's profile created on the blockchain (linked via the database), it will kind of create a CV (digital CV on the blockchain) and any employer who is a part of the network should be able to verify the CV & the 

5.) 3rd Party Verification Bodies: 3rd Party Verification bodies are the service providers who verify the claims of the professionals on the CV that they give to the employers. Employers pay a fees to these 3rd party verification bodies to verify the authenticity the claims made by the professionals/employees on their CVs. These should also be involved in the blockchain and they can then digitally verify the credentials of the employees/professionals on the blockchain.
