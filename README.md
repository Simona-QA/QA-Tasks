# QA-Tasks
Automation task

1.	Functional UI Automation using Playwright for two web apps based on Reactfrontend and Node.js backend:
1.	https://mukul-beach-resort.vercel.app/
2.	https://react-admin-dashboard-khaki.vercel.app/products

**	Script for editing item**

[Uploading edit script.cs…]()using System.Text.RegularExpressions;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;

namespace PlaywrightTests;

[TestClass]
public class ExampleTest1 : PageTest
{
    [TestMethod]
    public async Task HasTitle()
    {
    // 1. Navigate to login page
    await Page.GotoAsync("https://mukul-beach-resort.vercel.app/auth/login");

    // 2. Verify page title
    await Expect(Page).ToHaveTitleAsync(new Regex("Beach Resort ― Login"));

    // 3. Fill Email
    await Page.GetByPlaceholder("Email").FillAsync("test12344$$@test.com");
    // 4. Fill Password
    await Page.GetByPlaceholder("Password").FillAsync("test12344$$");

    // 5. Click submit
    await Page.Locator("button[type='submit']").ClickAsync();

    // 6. Wait for welcome message 
    await Page.GetByText("Welcome! test12344$$").WaitForAsync();

    // 7. Assert the welcome message exists
    await Expect(Page.GetByText("Welcome! test12344$$"))
        .ToBeVisibleAsync();


    // this is pause 3 seconds
    await Page.WaitForTimeoutAsync(3000);


/////////////////////////////////////////////////// login page ending here





    // 1. Navigate to the page
    await Page.GotoAsync("https://react-admin-dashboard-khaki.vercel.app/products");

    // 2. Locate the FIRST button with the green class
    var firstGreenButton = Page.Locator(".text-green-500").First;

    // 3. Verify it's visible (optional but recommended)
    await Expect(firstGreenButton).ToBeVisibleAsync();

    // 4. Click it
    await firstGreenButton.ClickAsync();



        //  Locate the input field by placeholder
    var productInput = Page.GetByPlaceholder("Product Name");

    //  Wait for the input to be visible/ready (optional but recommended)
    await productInput.WaitForAsync();

    //  Type the product name (clears existing text first)
    await productInput.FillAsync("Product 1");

    //  Verify the value was entered 
    await Expect(productInput).ToHaveValueAsync("Product 1");




           //  Locate the input field by placeholder
    var productPrice = Page.GetByPlaceholder("Price");

    //  Wait for the input to be visible/ready (optional but recommended)
    await productPrice.WaitForAsync();

    //  Type the product name (clears existing text first)
    await productPrice.FillAsync("100");

    //  Verify the value was entered 
    await Expect(productPrice).ToHaveValueAsync("100");



             //  Locate the input field by placeholder
    var productSales = Page.GetByPlaceholder("Sales");

    //  Wait for the input to be visible/ready (optional but recommended)
    await productSales.WaitForAsync();

    //  Type the product name (clears existing text first)
    await productSales.FillAsync("1");

    //  Verify the value was entered 
    await Expect(productSales).ToHaveValueAsync("1");





               //  Locate the input field by placeholder
    var productCategory = Page.GetByPlaceholder("Category");

    //  Wait for the input to be visible/ready (optional but recommended)
    await productCategory.WaitForAsync();

    //  Type the product name (clears existing text first)
    await productCategory.FillAsync("1");

    //  Verify the value was entered 
    await Expect(productCategory).ToHaveValueAsync("1");




                //  Locate the input field by placeholder
    var productStock = Page.GetByPlaceholder("Stock");

    //  Wait for the input to be visible/ready (optional but recommended)
    await productStock.WaitForAsync();

    //  Type the product name (clears existing text first)
    await productStock.FillAsync("11");

    //  Verify the value was entered 
    await Expect(productStock).ToHaveValueAsync("11");
    await Page.GetByRole(AriaRole.Button, new() { Name = "Add Product" }).First.ClickAsync();


    // Target the first <td> with the specified classes
    var cell = Page.Locator("td.px-6.py-4.whitespace-nowrap.text-sm.font-medium.text-gray-100.flex.gap-2.items-center").First;

    // Assert the text content
    await Expect(cell).ToContainTextAsync("Product 1");

    // click on edit icon
    await Page.Locator("button.text-blue-500").First.ClickAsync();


    //  Locate the input field by placeholder
    var productStockEdit = Page.Locator("label:has-text('Stock') + input");

    //  Wait for the input to be visible/ready (optional but recommended)
    await productStockEdit.WaitForAsync();

    //  Type the product name (clears existing text first)
    await productStockEdit.FillAsync("9");

    //  Verify the value was entered 
    await Expect(productStockEdit).ToHaveValueAsync("9");

    // click on save
    await Page.GetByRole(AriaRole.Button, new() { Name = "Save" }).ClickAsync();

    // locator for edoted value
    var editedValue = Page.Locator("xpath=//tr[@style='opacity: 1;']//td[text()='9']");
    // Assert visibility of editedValue
    await Expect(editedValue).ToBeVisibleAsync();


    await Page.WaitForTimeoutAsync(3000);
    // Click the first button with class "text-red-500" (more reliable)
    await Page.Locator("button.text-red-500").First.ClickAsync();

   await Page.WaitForTimeoutAsync(3000);

    await Expect(Page.Locator("td").Filter(new() { HasText = "Product 1" })).Not.ToBeVisibleAsync();

    await Page.WaitForTimeoutAsync(3000);
   await Page.WaitForTimeoutAsync(3000);
    }

   
}

**	Script for adding and deleting item**

[Uploading script for adding and deleting item.cs…]()using System.Text.RegularExpressions;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;

namespace PlaywrightTests;

[TestClass]
public class ExampleTest : PageTest
{
    [TestMethod]
    public async Task HasTitle()
    {
    // 1. Navigate to login page
    await Page.GotoAsync("https://mukul-beach-resort.vercel.app/auth/login");

    // 2. Verify page title
    await Expect(Page).ToHaveTitleAsync(new Regex("Beach Resort ― Login"));

    // 3. Fill Email
    await Page.GetByPlaceholder("Email").FillAsync("test12344$$@test.com");
    // 4. Fill Password
    await Page.GetByPlaceholder("Password").FillAsync("test12344$$");

    // 5. Click submit
    await Page.Locator("button[type='submit']").ClickAsync();

    // 6. Wait for welcome message 
    await Page.GetByText("Welcome! test12344$$").WaitForAsync();

    // 7. Assert the welcome message exists
    await Expect(Page.GetByText("Welcome! test12344$$"))
        .ToBeVisibleAsync();


    // this is pause 3 seconds
    await Page.WaitForTimeoutAsync(3000);


/////////////////////////////////////////////////// login page ending here





    // 1. Navigate to the page
    await Page.GotoAsync("https://react-admin-dashboard-khaki.vercel.app/products");

    // 2. Locate the FIRST button with the green class
    var firstGreenButton = Page.Locator(".text-green-500").First;

    // 3. Verify it's visible (optional but recommended)
    await Expect(firstGreenButton).ToBeVisibleAsync();

    // 4. Click it
    await firstGreenButton.ClickAsync();



        //  Locate the input field by placeholder
    var productInput = Page.GetByPlaceholder("Product Name");

    //  Wait for the input to be visible/ready (optional but recommended)
    await productInput.WaitForAsync();

    //  Type the product name (clears existing text first)
    await productInput.FillAsync("Product 1");

    //  Verify the value was entered 
    await Expect(productInput).ToHaveValueAsync("Product 1");




           //  Locate the input field by placeholder
    var productPrice = Page.GetByPlaceholder("Price");

    //  Wait for the input to be visible/ready (optional but recommended)
    await productPrice.WaitForAsync();

    //  Type the product name (clears existing text first)
    await productPrice.FillAsync("100");

    //  Verify the value was entered 
    await Expect(productPrice).ToHaveValueAsync("100");



             //  Locate the input field by placeholder
    var productSales = Page.GetByPlaceholder("Sales");

    //  Wait for the input to be visible/ready (optional but recommended)
    await productSales.WaitForAsync();

    //  Type the product name (clears existing text first)
    await productSales.FillAsync("1");

    //  Verify the value was entered 
    await Expect(productSales).ToHaveValueAsync("1");





               //  Locate the input field by placeholder
    var productCategory = Page.GetByPlaceholder("Category");

    //  Wait for the input to be visible/ready (optional but recommended)
    await productCategory.WaitForAsync();

    //  Type the product name (clears existing text first)
    await productCategory.FillAsync("1");

    //  Verify the value was entered 
    await Expect(productCategory).ToHaveValueAsync("1");




                //  Locate the input field by placeholder
    var productStock = Page.GetByPlaceholder("Stock");

    //  Wait for the input to be visible/ready (optional but recommended)
    await productStock.WaitForAsync();

    //  Type the product name (clears existing text first)
    await productStock.FillAsync("11");

    //  Verify the value was entered 
    await Expect(productStock).ToHaveValueAsync("11");
    await Page.GetByRole(AriaRole.Button, new() { Name = "Add Product" }).First.ClickAsync();


    // Target the first <td> with the specified classes
    var cell = Page.Locator("td.px-6.py-4.whitespace-nowrap.text-sm.font-medium.text-gray-100.flex.gap-2.items-center").First;

    // Assert the text content
    await Expect(cell).ToContainTextAsync("Product 1");

    await Page.WaitForTimeoutAsync(3000);

    }

    // [TestMethod]
    // public async Task GetStartedLink()
    // {
    //     await Page.GotoAsync("https://playwright.dev");

    //     // Click the get started link.
    //     await Page.GetByRole(AriaRole.Link, new() { Name = "Get started" }).ClickAsync();

    //     // Expects page to have a heading with the name of Installation.
    //     await Expect(Page.GetByRole(AriaRole.Heading, new() { Name = "Installation" })).ToBeVisibleAsync();
    // } 
}

**	Script for login**


[Uploading Script for login.cs…]()using System.Text.RegularExpressions;
using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;

namespace PlaywrightTests;

[TestClass]
public class ExampleTest : PageTest
{
    [TestMethod]
    public async Task HasTitle()
    {
    // 1. Navigate to login page
    await Page.GotoAsync("https://mukul-beach-resort.vercel.app/auth/login");

    // 2. Verify page title
    await Expect(Page).ToHaveTitleAsync(new Regex("Beach Resort ― Login"));

    // 3. Fill Email
    await Page.GetByPlaceholder("Email").FillAsync("test12344$$@test.com");
    // 4. Fill Password
    await Page.GetByPlaceholder("Password").FillAsync("test12344$$");

    // 5. Click submit
    await Page.Locator("button[type='submit']").ClickAsync();

    // 6. Wait for welcome message 
    await Page.GetByText("Welcome! test12344$$").WaitForAsync();

    // 7. Assert the welcome message exists
    await Expect(Page.GetByText("Welcome! test12344$$"))
        .ToBeVisibleAsync();


    // this is pause 3 seconds
    await Page.WaitForTimeoutAsync(3000);


/////////////////////////////////////////////////// login page ending here


    }


}

 


2. Task Postman APIs for login
Web page: https://mukul-beach-resort.vercel.app/profile?tab=my-profile



•	API endpoint for POST – login (positive scenario with valid credentials)

 
 ![valid](https://github.com/user-attachments/assets/71a69e0c-1af6-41fa-adee-36e63d385019)

<img width="1259" height="573" alt="valid 1" src="https://github.com/user-attachments/assets/8469b14a-a9d9-4518-bb1d-61004ef86a56" />




•	API endpoint for POST – login (negative scenario with incorrect credentials) 

<img width="1145" height="568" alt="incorrect" src="https://github.com/user-attachments/assets/4f301a2c-a841-4194-9b8e-4a3a813ffbdb" />

Web page: https://mukul-beach-resort.vercel.app/profile?tab=my-profile

•	API endpoint for POST – edit item  
 
![edit](https://github.com/user-attachments/assets/28dd279a-da4a-4237-9b05-fb0f069ecb3f)


 <img width="1257" height="648" alt="edit 1" src="https://github.com/user-attachments/assets/9ab78958-3ccd-425d-a21e-de6f714c4f59" />

<img width="1001" height="476" alt="edit 2" src="https://github.com/user-attachments/assets/717928d7-2c2c-42de-861d-b4e7868b6d77" />

<img width="1064" height="546" alt="edit 3" src="https://github.com/user-attachments/assets/49027052-529b-45b2-8d2f-a6323c078681" />


•	Successfully update
 <img width="1010" height="575" alt="updat" src="https://github.com/user-attachments/assets/b2205169-d061-4b89-b923-6720e30d20b0" />

 <img width="1070" height="489" alt="update 1" src="https://github.com/user-attachments/assets/f9f2a6f5-d0e0-4ea0-a381-3cdeb4a36649" />

<img width="1087" height="512" alt="update 2" src="https://github.com/user-attachments/assets/4289eb39-0199-48e2-859b-7e69385c4a7f" />

 
3. Test plan


Introduction 

The main purpose of the test plan is to ensure that all functionalites are meeting the specified requirements and are working as expected. With providing Automation scripts and API Testing we’re ensuring the stability, accuracy, and reliability of the apps and guarantying for the quality of the product.


Scope of testing

1.	According to the test plan for ensuring the quality of the product there were procided few Automation tests (writing Automation test scripts for few functionalities) byusing Playwright with Java Script.

These functionalities are: 

*Login Functionality
-Valid credentials -positive test,
-Invalid credentials -negative test

 
*Item Management functionality(positive and negative scenarios)
-Creating new item; 
-Editing an existing item;
-Deleting an item

    2. API Testing (checking the backend Node.js functionality with endpoints by using Postman) - with positive and negative test scenarios. Tested endpoints are:

*Authentication Endpoints

-POST /login – test with valid and invalid credentials


*Item Resource Endpoints

-GET /items – fetch and validate data structure and status codes

-POST /items – create new item and verify response

-PUT /items – update existing item and verify result

-DELETE /items– delete item and confirm deletion
 

*Validation Checks

Check response structure, status codes, headers. Validate required fields, error handling, and input validation

 
