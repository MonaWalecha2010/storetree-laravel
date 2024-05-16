<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div class="invoice-box"
    style="max-width: 60%;margin: auto;padding: 30px;border: 1px solid #eee;box-shadow: 0 0 10px rgba(0, 0, 0, .15);font-size: 16px;line-height: 24px;font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;color: #555;">
    <table cellpadding="0" cellspacing="0" style="width: 100%;line-height: inherit;text-align: left;">
        <tr class="top">
            <td colspan="2" style="padding: 5px;vertical-align: top;">
                <table style="width: 100%;line-height: inherit;text-align: left;">
                    <tr>
                        <td class="title"
                            style="padding: 5px;vertical-align: top;text-align: center;border: #e7e7e7; font-size: 45px;line-height: 45px;color: #097fce;">
                           <a href="https://storeetree.com">
                                                    <img src="https://storeetree.com/images/frontend/new_logo_1.png" alt="Logo">
                                                </a>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 5px;vertical-align: top;text-align: left;padding-bottom: 20px; color:black;">

                            <p>Hi there <strong>{{$maildata['username']}}</strong>,</p>

                            <p><strong>{{$maildata['mainuser']}}</strong> has created a personal life Storee on <a  href="https://storeetree.com">StoreeTree.com</a> and included you in a Family & Friends Tree. CONGRATS!<p> 

                            <p><strong>{{$maildata['username']}}</strong>, the username and password below gives you access to <a  href="https://storeetree.com">StoreeTree.com</a> - come and enjoy the Storees, tell your life Storee for generations to enjoy and build your family & friends tree. It’s all simple and easy to do </p>

                            <p>Username : </strong><em>{{$maildata['email']}}</em></strong></p>
                            <p>Password : <strong>{{$maildata['password']}}</strong></p>

                            <p>At StoreeTree,  MEMORIES LIVE HERE…</p>

                            <p>With Gratitude!</p>

                            <p>Glenn from StoreeTree</p>

                        </td>
                    </tr>
                    <tr>
                        <td class="foot"
                            style="padding: 1px;vertical-align: top;text-align: center;background-color: #243e8f;font-size: 15px;color: #fafafa;">
                            <p>Copyright © 2023 <a style="color:#fafafa;" href="https://storeetree.com/">StoreeTree.com</a>. All Rights Reserved</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</div>
</body>
</html>