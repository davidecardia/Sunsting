import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage {
    url = '../assets/ssLogo.png';
    title = 'Login';
    email: string;
    password: string;
    form: FormGroup;
    submitted = false;
    loading = false;


    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.form = formBuilder.group({
            username:
                [
                    null,
                    [Validators.required, Validators.minLength(5)]
                ],
            password:
                [
                    null,
                    [ Validators.required, Validators.minLength(5)]
                ]
        });
    }

    onSubmit(form: FormGroup) {
        if (!form.valid) {
            return;
        }
        const username = form.value.username;
        const password = form.value.password;
        this.authService.login(username, password);
    }






} //END CLASS
