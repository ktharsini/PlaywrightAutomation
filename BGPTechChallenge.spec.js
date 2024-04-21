const { test, expect } = require('playwright/test');

test("Log into portal", async ({browser}) => {
  
//   const browser = await chromium.launch();

  const context = await browser.newContext();
  const page = await context.newPage();
  

     await page.goto('https://qa-internet.bgp.onl/');
     
     await page.waitForLoadState('domcontentloaded');
     await page.waitForTimeout(2000);
     await page.setViewportSize({ width: 1920, height: 1080 });

     await page.getByRole('textbox', { name: 'Username' }).click();
     await page.getByRole('textbox', { name: 'Username' }).fill('temp-govtech');
     await page.getByRole('textbox', { name: 'Password' }).click();
     await page.getByRole('textbox', { name: 'Password' }).fill('bgPB3Aw3SomeGvtF@lk!');
     await page.getByRole('button', { name: 'submit' }).click();

     await page.waitForTimeout(2000);
    
     await page.getByRole('link', { name: 'Apply for a grant now Login' }).click();
     await page.waitForTimeout(2000);
     await page.locator('//h1[contains(text(), "Manual Log In")]');
     await page.fill('//input[@id="entityId"]', 'BGPQETECH5');
     await page.fill('//input[@id="userId"]', 'S1234567D');
     await page.fill('//input[@id="userRole"]', 'Acceptor');
     await page.fill('//input[@id="userFullName"]', 'Tan Ah Kow');
     await page.click('//button[@type="submit"]');
     await page.waitForTimeout(5000);

     await page.locator('//p[contains(text(), "support your project")]').click();
     await page.waitForTimeout(5000);
     
// Which sector best describes your business?
     
    const elementIT = await page.locator('(//div[@class="itemname"])[8]');
    await elementIT.hover();
    await elementIT.isChecked();
    await page.waitForTimeout(2000);
    await page.locator('(//div[@class="itemname"])[8]').click();
    
// I need this grant

    await page.hover('//div[contains(text(),"Bring my business")]');
    await page.click('//div[contains(text(),"Bring my business")]');

    await page.hover('//input[@id="Market Readiness Assistance 2"]');
    await page.waitForTimeout(2000);
    await page.click('//input[@id="Market Readiness Assistance 2"]');
    await page.locator('#go-to-grant').click();


// Grant actions
    const elementScroll = await page.locator('//button[contains(text(),"Proceed")]');
     await elementScroll.scrollIntoViewIfNeeded();
    //  await page.click('//button[contains(text(),"Proceed")]');
    await   page.locator('//button[contains(text(),"Proceed")]').click();
     
    
// CHECK YOUR ELIGIBILITY
    await page.waitForSelector('//*[contains(text(),"turnover")]');

    await page.locator('(//span[@class="radiobutton"])[2]').click();
    const page1Promise = page.waitForEvent('popup');
    await page.locator('[href*="get-a-grant"]').click();

    const page1 = await page1Promise;
    await page1.setViewportSize({ width: 1920, height: 1080 });
    await page1.waitForSelector('#get-a-grant');
    const faq1Page = await page1.locator('#get-a-grant').isVisible();
    console.log('FAQ link for applicant registered in Singapore? is visible:', faq1Page);
    await page1.close();
    // await page.goBack();

    await page.waitForLoadState('networkidle');
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    await page.locator('(//span[@class="radiobutton"])[1]').click();
    
    await page.waitForSelector('//a[contains(text(),"local equity")]');

    await page.locator('(//span[@class="radiobutton"])[4]').click();
    const page2Promise = page.waitForEvent('popup');
    await page.locator('[href*="get-a-grant"]').click();
     const page2 = await page2Promise;
     await page2.setViewportSize({ width: 1920, height: 1080 });
     await page2.waitForSelector('#get-a-grant');
    const faq2Page = await page2.locator('#get-a-grant').isVisible();
    console.log('FAQ link for group sales turnover less than or equal to S$100m is visible:', faq2Page);
    await page2.close();

    await page.waitForLoadState('networkidle');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.locator('(//span[@class="radiobutton"])[3]').click();

    const elementhandle1 = await page.locator('(//span[@class="radiobutton"])[6]');
    await elementhandle1.scrollIntoViewIfNeeded();
    await page.locator('(//span[@class="radiobutton"])[6]').click();

    const page3Promise = page.waitForEvent('popup');
    await page.locator('[href*="get-a-grant"]').click();
    const page3 = await page3Promise;
    await page3.setViewportSize({ width: 1920, height: 1080 });
    await page3.waitForSelector('#get-a-grant');
    const faq3Page = await page3.locator('#get-a-grant').isVisible();
    console.log('FAQ link for Does the applicant have at least 30%? is visible:', faq3Page);
    await page3.close();
    
    await page.setViewportSize({ width: 1920, height: 1080 });  
    const elementhandle2 = await page.locator('(//span[@class="radiobutton"])[5]');
    await elementhandle2.scrollIntoViewIfNeeded();
    await page.locator('(//span[@class="radiobutton"])[5]').click();

    await page.locator('(//span[@class="radiobutton"])[8]').click();
    const page4Promise = page.waitForEvent('popup');
    await page.locator('[href*="get-a-grant"]').click();
    const page4 = await page4Promise;
    await page4.setViewportSize({ width: 1920, height: 1080 });
    const faq4Page =  await page4.locator('#get-a-grant').isVisible();
    console.log('FAQ link for that you are applying for a new market? is visible:', faq4Page);
    await page4.close();
    
    await page.setViewportSize({ width: 1920, height: 1080 });
    const elementhandle3 =  await page.locator('(//span[@class="radiobutton"])[7]');
    await elementhandle3.scrollIntoViewIfNeeded();
    await page.locator('(//span[@class="radiobutton"])[7]').click();

    await page.locator('(//span[@class="radiobutton"])[10]').click();
    const page5Promise = page.waitForEvent('popup');
    await page.locator('[href*="get-a-grant"]').click();
    const page5 = await page5Promise;
    await page5.setViewportSize({ width: 1920, height: 1080 });
    const faq5Page = await page5.locator('#get-a-grant').isVisible();
    console.log('FAQ link for following statements true for this project? is visible:', faq5Page);
    await page5.close();

    await page.setViewportSize({ width: 1920, height: 1080 });
    const elementhandle4 = await page.locator('(//span[@class="radiobutton"])[9]');
    await elementhandle4.scrollIntoViewIfNeeded();
    await page.locator('(//span[@class="radiobutton"])[9]').click();

    await page.click('//button[@id="save-btn"]');
    await page.click('//button[@id="next-btn"]');

//Fill in the "PROVIDE YOUR CONTACT DETAILS"
        
    await page.waitForLoadState('networkidle');
    // await page.locator('#react-contact_info-name').click({timeout:100});
    await page.fill('#react-contact_info-name', 'Jack Martin');
        
    // await page.locator('#react-contact_info-designation').click({timeout:100});
    await page.fill('#react-contact_info-designation', 'Marketting Officer');
        
    // await page.getByTestId('number-field').click({timeout:100});
    await page.getByTestId('number-field').fill('87272888');
        
    // await page.locator('#react-contact_info-primary_email').click({timeout:100});
    await page.locator('#react-contact_info-primary_email').fill('Jack_martin@test.com');
    await page.locator('//h3[contains(text(),"Letter Of Offer Addressee")]');

    await page.click('(//input[@type="checkbox"])[1]');
    
    const postalcode = await page.isVisible('//input[@placeholder="Enter your Postal Code"]');
    expect(postalcode).toBe(true);

    const blockno = await page.isVisible('(//input[@class="form-control bgp-textfield"])[7]');
    expect(blockno).toBe(true);

    const street = await page.isVisible('(//input[@class="form-control bgp-textfield"])[8]');
    expect(street).toBe(true);

    const level = await page.isVisible('(//input[@class="form-control bgp-textfield"])[9]');
    expect(level).toBe(true);

    const unitno = await page.isVisible('(//input[@class="form-control bgp-textfield"])[10]');
    expect(unitno).toBe(true);
    

    await page.click('(//input[@type="checkbox"])[2]');

    const personname = await page.isVisible('(//input[@class="form-control bgp-textfield"])[12]');
    expect(personname).toBe(true);

    const personjob = await page.isVisible('(//input[@class="form-control bgp-textfield"])[13]');
    expect(personjob).toBe(true);

    const personemail = await page.isVisible('(//input[@class="form-control bgp-textfield"])[14]');
    expect(personemail).toBe(true);


    await page.click('//button[@id="save-btn"]');
    await page.click('//button[@id="next-btn"]');

// Submit your proposal

    await page.waitForLoadState('networkidle');
    await page.locator('#react-project-title').click();
    await page.fill('#react-project-title', 'MyFirstProject');
    await page.locator('(//input[@id="react-project-start_date"])[1]');
    await page.fill('(//input[@id="react-project-start_date"])[1]', '25 Apr 2024');
    await page.locator('(//input[@id="react-project-end_date"])[1]');
    await page.fill('(//input[@id="react-project-end_date"])[1]', '25 May 2024');
    await page.locator('//textarea[@id="react-project-description"]');
    await page.fill('//textarea[@id="react-project-description"]', 'This is my project proposal');
    await page.locator('(//span[@class="Select-value-label"])[1]');
    await page.click('(//div[@class="Select-placeholder"])[1]');
    await page.click('//*[text()="Overseas Marketing Presence"]');
    await page.click('(//div[@class="Select-placeholder"])[1]');
    await page.click('//*[text()="Norway"]');
    await page.waitForLoadState('networkidle');
    await page.click('(//span[@class ="bgp-label"])[1]');

    await page.locator('//button[@id="save-btn"]').click();
    await page.locator('//button[@id="next-btn"]').click();

// Explain the business impact

    await page.waitForLoadState('networkidle');
    
    await page.locator('//input[@id="react-project_impact-fy_end_date_0"]');
    await page.fill('//input[@id="react-project_impact-fy_end_date_0"]', '15 May 2024');
    await page.locator('//input[@id="react-project_impact-overseas_sales_0"]');
    await page.fill('//input[@id="react-project_impact-overseas_sales_0"]', '100');
    await page.locator('//input[@id="react-project_impact-overseas_sales_1"]');
    await page.fill('//input[@id="react-project_impact-overseas_sales_1"]', '200');
    await page.locator('//input[@id="react-project_impact-overseas_sales_2"]');
    await page.fill('//input[@id="react-project_impact-overseas_sales_2"]', '300');
    await page.locator('//input[@id="react-project_impact-overseas_sales_3"]');
    await page.fill('//input[@id="react-project_impact-overseas_sales_3"]', '300');

    await page.locator('//input[@id="react-project_impact-overseas_investments_0"]');
    await page.fill('//input[@id="react-project_impact-overseas_investments_0"]', '1000');
    await page.locator('//input[@id="react-project_impact-overseas_investments_1"]');
    await page.fill('//input[@id="react-project_impact-overseas_investments_1"]', '2000');
    await page.locator('//input[@id="react-project_impact-overseas_investments_2"]');
    await page.fill('//input[@id="react-project_impact-overseas_investments_2"]', '3000');
    await page.locator('//input[@id="react-project_impact-overseas_investments_3"]');
    await page.fill('//input[@id="react-project_impact-overseas_investments_3"]', '4000');

    await page.fill('(//textarea[@class="form-control bgp-textarea"])[1]', 'Planning and Decision Making');

    await page.fill('(//textarea[@class="form-control bgp-textarea"])[2]', 'Brand Reputation and Recognition');

    await page.locator('//button[@id="save-btn"]').click();
    await page.locator('//button[@id="next-btn"]').click();
   
// Provide details of cost 

    await page.waitForLoadState('networkidle');
    await page.locator('//div[contains(text(),"Third Party Vendors")]').click();
    await page.locator('(//button[contains(text(),"Add New Item")])[1]').click();
    await page.locator('(//span[@class="radiobutton"])[2]').click();
    await page.locator('//input[@data-testid="text-field"]');
    await page.fill('//input[@data-testid="text-field"]', 'ABC company');
 

// uploading the file for third party vendor

    await page.click('#react-project_cost-vendors-0-attachments-btn');

    // Use Playwright's file picker API to select the file
    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.click('#react-project_cost-vendors-0-attachments-btn')
      ]);

    // Accept the file chooser dialog
    await fileChooser.setFiles(['/Users/a2160984/Documents/Playwright_ElementCheck.png']);
    
    // Simulate pasting the file path into the file picker dialog
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyV');
    await page.keyboard.up('Control');
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyV');
    await page.keyboard.up('Control');   
    await page.waitForTimeout(8000) ;
    await page.keyboard.press('Enter');
    await page.keyboard.press('Enter');


        await page.locator('#react-project_cost-vendors-0-amount_in_billing_currency');
        await page.fill('#react-project_cost-vendors-0-amount_in_billing_currency', '100');
        

        await page.locator('(//div[contains(text(), "Office Space Rental")])[2]');
        await page.locator('(//div[contains(text(), "Office Space Rental")])[2]').click();
        await page.locator('#react-project_cost-office_rentals-add-item').click();
        await page.locator('#react-project_cost-office_rentals-0-description');
        await page.fill('#react-project_cost-office_rentals-0-description', 'Office space description');
       await page.locator('#react-project_cost-office_rentals-0-rental_duration');
        await page.fill('#react-project_cost-office_rentals-0-rental_duration', '1');
        await page.locator('#react-project_cost-office_rentals-0-amount_in_billing_currency');
        await page.fill('#react-project_cost-office_rentals-0-amount_in_billing_currency', '100');

//  uploading the file for official space rental

    await page.click('#react-project_cost-office_rentals-0-attachments-btn');

    // Use Playwright's file picker API to select the file
    const [fileChooser1] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.click('#react-project_cost-office_rentals-0-attachments-btn')
      ]);

    // Accept the file chooser dialog
    await fileChooser1.setFiles(['/Users/a2160984/Documents/Playwright_ElementCheck.png']);
    
    // Simulate pasting the file path into the file picker dialog
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyV');
    await page.keyboard.up('Control');
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyV');
    await page.keyboard.up('Control');   
    await page.waitForTimeout(8000) ;
    await page.keyboard.press('Enter');
    await page.keyboard.press('Enter');


      await page.locator('(//div[@class="col-md-5 hidden-sm hidden-xs"])[3]').click();
      await page.locator('#react-project_cost-salaries-add-item').click();
      await page.locator('#react-project_cost-salaries-0-name');
      await page.fill('#react-project_cost-salaries-0-name', 'James');

      await page.locator('#react-project_cost-salaries-0-designation');
      await page.fill('#react-project_cost-salaries-0-designation', 'Business Agent');
      await page.locator('#react-project_cost-salaries-0-project_role');
      await page.fill('#react-project_cost-salaries-0-project_role', 'Marketting');
      await page.locator('#react-project_cost-salaries-0-involvement_months');
      await page.fill('#react-project_cost-salaries-0-involvement_months', '1');
      await page.locator('#react-project_cost-salaries-0-salary_in_billing_currency');
      await page.fill('#react-project_cost-salaries-0-salary_in_billing_currency', '105');

// File upload for salary

    await page.click('#react-project_cost-salaries-0-attachments-btn');

// Use Playwright's file picker API to select the file
    const [fileChooser2] = await Promise.all([
      page.waitForEvent('filechooser'),
       page.click('#react-project_cost-salaries-0-attachments-btn')
    ]);

// Accept the file chooser dialog
    await fileChooser2.setFiles(['/Users/a2160984/Documents/Playwright_ElementCheck.png']);

// Simulate pasting the file path into the file picker dialog
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyV');
    await page.keyboard.up('Control');   
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyV');
    await page.keyboard.up('Control');   
    await page.waitForTimeout(8000) ;
    await page.keyboard.press('Enter');
    await page.keyboard.press('Enter');      

        await page.locator('//button[@id="save-btn"]').click();
        await page.locator('//button[@id="next-btn"]').click();
   
// DECLARE & ACKNOWLEDGE TERMS
 
        await page.waitForLoadState('networkidle');
        await page.locator('//h2[contains(text(),"Declare & Acknowledge Terms")]');
        await page.locator('(//span[@class="radiobutton"])[1]').click();
        await page.locator('(//span[@class="radiobutton"])[3]').click();
        await page.locator('(//span[@class="radiobutton"])[5]').click();
        await page.locator('(//span[@class="radiobutton"])[7]').click();

        const elemntscroll1 = await page.locator('(//span[@class="radiobutton"])[10]');
        await elemntscroll1.scrollIntoViewIfNeeded();
        await page.locator('(//span[@class="radiobutton"])[9]').click();
        await page.locator('(//span[@class="radiobutton"])[11]').click();
        
        const elementScroll2 = page.locator('(//span[@class="radiobutton"])[14]');
        await elementScroll2.scrollIntoViewIfNeeded();
        await page.locator('(//span[@class="radiobutton"])[13]').click();
        await page.locator('(//span[@class="radiobutton"])[15]').click();

        const elementScroll3 = page.locator('#react-declaration-consent_acknowledgement_check');
        await elementScroll3.scrollIntoViewIfNeeded();
        await page.locator('#react-declaration-consent_acknowledgement_check').click();

        await page.locator('#save-btn').click();
        await page.locator('#review-btn').click();
        

// Review Your Application to Submit

      await page.locator('//h4[contains(text(), "Business Activity")]');

      const scrollSubmit = await page.locator('//input[@type="checkbox"]');
      await scrollSubmit.scrollIntoViewIfNeeded();
      
      await page.locator('//input[@type="checkbox"]').click();
      const checkbox1 = page.locator('//input[@type="checkbox"]').isChecked();
      console.log('Check box is checked');
      await page.locator('#submit-btn');
      await page.locator('#submit-btn').click();


//Log out

      await page.locator('//h3[contains(text(), "Your application has been submitted.")]');
      await page.locator('//span[contains(text(), "LOG OUT")]').click();
        
    
  await browser.close();
});
