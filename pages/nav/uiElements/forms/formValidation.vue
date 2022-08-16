<template>
    <div>
        <div class="page-hero page-container" id="page-hero">
            <div class="padding d-flex">
                <div class="page-title">
                    <h2 class="text-md text-highlight">Validation</h2><small class="text-muted">Provide valuable,
                        actionable feedback to your users</small>
                </div>
                <div class="flex"></div>
                <div><a href="https://themeforest.net/item/basik-responsive-bootstrap-web-admin-template/23365964"
                        class="btn btn-md text-muted"><span class="d-none d-sm-inline mx-1">Buy this Item</span> <svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-arrow-right">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg></a></div>
            </div>
        </div>
        <div class="page-content page-container" id="page-content">
            <div class="padding">
                <div class="row">
                    <div class="col-sm-6">
                        <form>
                            <div class="card">
                                <div class="card-header"><strong>Register</strong></div>
                                <div class="card-body">
                                    <p class="text-muted">Please fill the information to continue</p>
                                    <div class="form-group"><label>Username</label><input type="text"
                                            class="form-control" ></div>
                                    <div class="form-group"><label>Email</label><input type="email" class="form-control"
                                            ></div>
                                    <div class="form-row">
                                        <div class="form-group col-sm-6"><label>Enter password</label><input
                                                type="password" class="form-control"  id="pwd"></div>
                                        <div class="form-group col-sm-6"><label>Confirm password</label><input
                                                type="password" class="form-control" data-parsley-equalto="#pwd"
                                                ></div>
                                    </div>
                                    <div class="form-group"><label>Phone</label><input type="number"
                                            class="form-control" placeholder="XXX XXXX XXX" ></div>
                                    <div class="checkcard"><label class="ui-check"><input type="checkbox" name="check"
                                                 required="true"><i></i> I agree to the <a href="#"
                                                class="text-primary">Terms of Service</a></label></div>
                                    <div class="text-right"><button type="submit"
                                            class="btn btn-primary">Submit</button></div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-sm-6">
                        <form>
                            <div class="card">
                                <div class="card-header"><strong>Contact</strong></div>
                                <div class="card-body">
                                    <p class="text-muted">Need support? please fill the fields below.</p>
                                    <div class="form-row">
                                        <div class="form-group col-sm-6"><label>Your name</label><input type="text"
                                                class="form-control" placeholder="Name" ></div>
                                        <div class="form-group col-sm-6"><label>Email</label><input type="email"
                                                class="form-control" placeholder="Enter email" ></div>
                                    </div>
                                    <div class="form-group"><label>Your website</label><input type="url" 
                                            class="form-control" placeholder="Your website url"></div>
                                    <div class="form-group"><label>Message</label><textarea class="form-control"
                                            rows="6" data-minwords="6" 
                                            placeholder="Type your message"></textarea></div>
                                    <div class="text-right pt-2"><button type="submit"
                                            class="btn btn-primary">Submit</button></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <form>
                            <div class="card">
                                <div class="card-header"><strong>Basic constraints</strong></div>
                                <div class="card-body">
                                    <div class="form-group row"><label class="col-sm-3 col-form-label">Required</label>
                                        <div class="col-sm-9"><input type="text" class="form-control" 
                                                placeholder="required field"><select 
                                                class="form-control custom-select my-2">
                                                <option value="">Please choose</option>
                                                <option value="foo">Foo</option>
                                                <option value="bar">Bar</option>
                                            </select>
                                            <div class="checkcard"><label class="checkbox ui-check"><input
                                                        type="checkbox" name="inlineCheckbox1" value="option1"
                                                        
                                                        data-parsley-error-message="You must agree to the site policy."><i></i>
                                                    Agree to the policy</label></div>
                                        </div>
                                    </div>
                                    <div class="form-group row"><label class="col-sm-3 col-form-label">Min
                                            Length</label>
                                        <div class="col-sm-9"><input type="text" minlength="6" class="form-control"
                                                placeholder="minlength = 6"></div>
                                    </div>
                                    <div class="form-group row"><label class="col-sm-3 col-form-label">Max
                                            Length</label>
                                        <div class="col-sm-9"><input type="text" maxlength="6" class="form-control"
                                                placeholder="maxlength = 6"></div>
                                    </div>
                                    <div class="form-group row"><label class="col-sm-3 col-form-label">Range
                                            Length</label>
                                        <div class="col-sm-9"><input type="text" data-parsley-length="[6, 10]"
                                                class="form-control" placeholder="data-rangelength = [5,10]"></div>
                                    </div>
                                    <div class="form-group row"><label class="col-sm-3 col-form-label">Min</label>
                                        <div class="col-sm-9"><input type="text" min="6" class="form-control"
                                                placeholder="min = 6"></div>
                                    </div>
                                    <div class="form-group row"><label class="col-sm-3 col-form-label">Max</label>
                                        <div class="col-sm-9"><input type="text" max="100" class="form-control"
                                                placeholder="max = 100"></div>
                                    </div>
                                    <div class="form-group row"><label class="col-sm-3 col-form-label">Range</label>
                                        <div class="col-sm-9"><input type="text" data-parsley-range="[6, 10]"
                                                class="form-control" placeholder="data-range = [6, 10]"></div>
                                    </div>
                                    <div class="form-group row"><label class="col-sm-3 col-form-label">Pattern</label>
                                        <div class="col-sm-9"><input type="text" pattern="#[A-Fa-f0-9]{6}"
                                                class="form-control" placeholder="hexa color code"></div>
                                    </div>
                                    <div class="text-right"><button type="submit"
                                            class="btn btn-primary">Submit</button></div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-sm-6">
                        <form>
                            <div class="card">
                                <div class="card-header"><strong>Type constraints</strong></div>
                                <div class="card-body">
                                    <div class="form-group row"><label class="col-sm-3 col-form-label">Email</label>
                                        <div class="col-sm-9"><input type="email" class="form-control" 
                                                placeholder="email"></div>
                                    </div>
                                    <div class="form-group row"><label class="col-sm-3 col-form-label">Url</label>
                                        <div class="col-sm-9"><input type="url" class="form-control" placeholder="url">
                                        </div>
                                    </div>
                                    <div class="form-group row"><label class="col-sm-3 col-form-label">Integer</label>
                                        <div class="col-sm-9"><input type="text" data-parsley-type="integer"
                                                class="form-control" placeholder="Integer"></div>
                                    </div>
                                    <div class="form-group row"><label class="col-sm-3 col-form-label">Digits</label>
                                        <div class="col-sm-9"><input type="text" data-parsley-type="digits"
                                                class="form-control" placeholder="digits"></div>
                                    </div>
                                    <div class="form-group row"><label class="col-sm-3 col-form-label">Number</label>
                                        <div class="col-sm-9"><input type="text" data-parsley-type="number"
                                                class="form-control" placeholder="number"></div>
                                    </div>
                                    <div class="form-group row"><label class="col-sm-3 col-form-label">Alphanum</label>
                                        <div class="col-sm-9"><input type="text" data-parsley-type="alphanum"
                                                class="form-control" placeholder="alphanumeric string"></div>
                                    </div>
                                    <div class="form-group row"><label class="col-sm-3 col-form-label">Equal To</label>
                                        <div class="col-sm-9">
                                            <div class="row">
                                                <div class="col-sm-6"><input type="text" value="foo" id="foo"
                                                        class="form-control"></div>
                                                <div class="col-sm-6"><input type="text" data-parsley-equalto="#foo"
                                                        placeholder="equal to foo" class="form-control"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-right"><button type="submit"
                                            class="btn btn-primary">Submit</button></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>