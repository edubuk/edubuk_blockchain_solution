/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */
/**
* Track the trade of a commodity from one trader to another
* @param {org.edubuk.mynetwork.Verification} verification - the trade to be processed
* @transaction
*/

async function verifyCertificate(verification)
{
if(verification.certificate.receiver.name !== verification.recipient.name)
{
throw new Error('Mismatch of Certificates');

}
}


/**
* Track the trade of a commodity from one trader to another
* @param {org.edubuk.mynetwork.WorkExperienceLetterVerification} workExperienceLetterVerification - the trade to be processed
* @transaction
*/

async function verifyCertificate(workExperienceLetterVerification)
{
if(workExperienceLetterVerification.workexperience.employee.name !== workExperienceLetterVerification.employee.name)
{
throw new Error('Mismatch of Certificates');

}
}
